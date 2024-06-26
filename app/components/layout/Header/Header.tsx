'use client';

import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Button from '../../Button/Button';
import { useSession } from 'next-auth/react';

const Header = () => {
  const { status, data: session } = useSession();

  if (status === 'loading') return null;

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
        {
          status === 'unauthenticated' ?
            <Link href="/api/auth/signin">
              <Button text='Sign in' bgColor='white' textColor='black' />
              <Button text='Sign up' bgColor='rgb(88, 88, 228)' />
            </Link> :
            <Link href={{
              pathname: 'profile',
              query: { name: session.user.name, photo: JSON.stringify({ src: session?.user.image }) }
            }}>{session!.user.name}</Link>
        }
      </div>
    </header>
  )
}

export default Header