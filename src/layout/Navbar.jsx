import { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar} aria-label="Navegação principal">
      <button
        className={styles.hamburger}
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="menu-principal"
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        <span aria-hidden="true">{open ? "×" : "☰"}</span>
      </button>
      <ul
        id="menu-principal"
        className={`${styles.menu} ${open ? styles.active : ""}`}
      >
        <li><a href="#inicio" onClick={() => setOpen(false)}>Início</a></li>
        <li><a href="#sobre" onClick={() => setOpen(false)}>Sobre mim</a></li>
        <li><a href="#habilidades" onClick={() => setOpen(false)}>Habilidades</a></li>
        <li><a href="#projetos" onClick={() => setOpen(false)}>Projetos</a></li>
        <li><a href="#contato" onClick={() => setOpen(false)}>Contato</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;