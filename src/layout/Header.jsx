import styles from './Header.module.css';
import { FaFacebook, FaInstagram, FaLinkedin , FaGithub} from 'react-icons/fa';

 
 function Header() {
  return (
    <header className={styles.header}>
      <h1>André Cosmos</h1>
      <p>Desenvolvedor Full Stack</p>

      <div className={styles.social_reader}>
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
      </div>
    </header>
  );
}

export default Header; 