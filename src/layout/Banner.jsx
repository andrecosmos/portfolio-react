
import andre from '../assets/andre.png';

import styles from './Banner.module.css';

function Banner() {
  return (
        <div className={styles.banner}>
            <img src={andre} alt="portfolio banner" />
        </div>
  )
}

export default Banner;