import andre from '../assets/andre-1.png';

import styles from './Banner.module.css';

function Banner() {
  return (
        <div className={styles.banner}>
            <img src={andre} alt="portfolio banner" />
        </div>
  )
}

export default Banner;