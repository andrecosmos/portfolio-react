import styles from './Header.module.css';
import { FaFacebook, FaInstagram, FaLinkedin , FaGithub, FaWhatsapp } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';
import { whatsappUrl } from '../Service/contato';


 function Header() {
  return (
    <header className={styles.header} id="inicio">

        <section className={styles.intro}>
          <h1>André Cosmos</h1>
          <p>Desenvolvedor Full Stack</p>
        </section>



        <section className={styles.social_reader}>
            <a 
              className="facebook"
              href="https://www.facebook.com/andre.cosmos.56"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook style={{ color: "#1877F2", fontSize: "24px" }} /> 
            </a>
            <a
              className="instagram"
              href="https://instagram.com/andre_cosmos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram style={{ color: "#E4405F", fontSize: "24px" }} />
            </a>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/andre-cosmos-b95480a1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin style={{ color: '#0077b5', fontSize: '24px' }}/>
            </a>
            <a
              className="github"
              href="https://github.com/andrecosmos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={{ color: '#333', fontSize: '24px' }}  />
            </a>
          
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="whatsapp-btn"
              aria-label="Conversar no WhatsApp"
            >
            <FaWhatsapp  style={{ color: '#25d366', fontSize: '24px' }}/>
            </a>
          
        </section>

        

        <section className={styles.about} id="sobre" aria-labelledby="about-title">
          <div className={styles.aboutContainer}>
            <div className={styles.profileContainer}>
              <img className={styles.profile} src={profileImage} alt="André Cosmos" />
            </div>
            <div className={styles.aboutText}>
              <h2 id="about-title">📌 Sobre mim</h2>
              <p>
                Profissional formado em <strong>Ciência da Computação e Gestão Empresarial</strong>, atualmente focado no desenvolvimento de soluções tecnológicas. Embora minha trajetória anterior tenha sido marcada pelo empreendedorismo no e-commerce (2010-2025), venho me especializando intensamente no desenvolvimento de software através de bootcamps e projetos práticos.
              </p>
            </div>
          </div>
        </section>
    </header>
  );
}

export default Header; 