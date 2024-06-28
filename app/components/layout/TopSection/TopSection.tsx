import React from 'react';
import styles from './TopSection.module.css';
import Image from 'next/image';
import HeroImage from '../../../../public/assets/hero-Illustration.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Button from '../../Button/Button';
import Link from 'next/link';

const TopSection = () => {
  return (
    <section className={styles.topSection}>
      <div className={styles.info}>
        <div className={styles.rate}>
          {[1, 2, 3, 4, 5].map((index) => <FontAwesomeIcon key={index} icon={faStar} width={30} height={30} color='orange' />)}
          <p>Rated 4.8/5 (243 reviews)</p>
        </div>
        <h2><b>Create your portfolio in minutes.</b></h2>
        <p>with Fiber, you can setup your own personal portfolio in minutes with
          dozens of permade, beautiful templates.
        </p>
        <div className={styles.links}>
          <Button text='Start Free Trial' bgColor='rgb(88, 88, 228)' />
          <Link href="/"><u><b>View Examples</b></u></Link>
        </div>
        <div className={styles.pros}>
          <span>
            <FontAwesomeIcon icon={faCircleCheck} color="green" width={30} height={30} />
            <p>No Credit Card Required</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faCircleCheck} color="green" width={30} height={30} />
            <p>10 Free Templates</p>
          </span>
        </div>
      </div>
      <Image src={HeroImage} alt='hero' />
    </section>
  )
}

export default TopSection