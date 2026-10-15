import { useEffect, useState } from "react";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "../Service/contato";
import styles from "./FloatingActions.module.css";

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setShowBackToTop(window.scrollY > 320);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <div className={styles.actions} role="group" aria-label="Ações rápidas">
      {showBackToTop && (
        <button
          className={`${styles.button} ${styles.backToTop}`}
          type="button"
          aria-label="Voltar ao topo"
          title="Voltar ao topo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaArrowUp aria-hidden="true" />
        </button>
      )}
      <a
        className={`${styles.button} ${styles.whatsapp}`}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp"
        title="Conversar pelo WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" />
      </a>
    </div>
  );
}
