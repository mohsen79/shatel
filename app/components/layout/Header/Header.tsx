'use client';

import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import User from '../../User/User';

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
      <User />
    </header>
  )
}

export default Header