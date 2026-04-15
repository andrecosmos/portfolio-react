
import andre_a from '../assets/andre_a.png';

import styles from './Banner.module.css';

function Banner() {
  return (
        <div className={styles.banner}>
            <img src={andre_a} alt="portfolio banner" />
        </div>
  )
}

export default Banner;