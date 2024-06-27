import { signOut, useSession } from 'next-auth/react';
import React from 'react';
import styles from '../layout/Header/Header.module.css';
import Link from 'next/link';
import Button from '../Button/Button';
import SkeletonLoading from './SkeletonLoading';

const User = () => {
  const { status, data: session } = useSession();

  if (status === 'loading') return <SkeletonLoading />;

  return (
    <div className={styles.auth}>
      {
        status === 'unauthenticated' ?
          <Link href="/signup">
            <Button text='Sign in' bgColor='white' textColor='black' />
            <Button text='Sign up' bgColor='rgb(88, 88, 228)' />
          </Link> :
          <div className={styles.signedIn}>
            <Button
              onClick={() => signOut({ callbackUrl: '/' })}
              bgColor='transparent' textColor='black' text='Sign out' />
            <Link href={{
              pathname: 'profile',
              query: { name: session.user.name, photo: JSON.stringify({ src: session?.user.image }) }
            }}>{session!.user.name}</Link>
          </div>
      }
    </div>
  )
}

export default User