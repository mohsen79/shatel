import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Button from '../../Button/Button';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">Fiber</Link>
      <nav>
        <ul>
          <li><Link href="/">Comminuty</Link></li>
          <li><Link href="/">Pricing</Link></li>
          <li><Link href="/">Features</Link></li>
        </ul>
      </nav>
      <div className={styles.auth}>
        <Button text='Sign in' bgColor='white' textColor='black' />
        <Button text='Sign up' bgColor='rgb(88, 88, 228)' />
      </div>
    </header>
  )
}

export default Header