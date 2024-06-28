import { signOut, useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import styles from '../layout/Header/Header.module.css';
import Link from 'next/link';
import Button from '../Button/Button';
import SkeletonLoading from './AuthSkeletonLoading';
import Cookies from 'js-cookie';

const User = () => {
  const { status, data: session } = useSession();
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    Cookies.get('loggedUser') && setLoggedUser(JSON.parse(Cookies.get('loggedUser')));
  }, [session]);

  const signoutUser = () => {
    signOut({ callbackUrl: '/' });
    Cookies.remove('loggedUser');
    setLoggedUser(null);
  }

  if (status === 'loading') return <SkeletonLoading />;

  return (
    <div className={styles.auth}>
      {
        loggedUser ?
          <div className={styles.signedIn}>
            <Button
              onClick={signoutUser}
              bgColor='transparent' textColor='black' text='Sign out' />
            <Link href={{
              pathname: 'profile',
              query: { name: loggedUser.username, photo: loggedUser.photo }
            }}>{loggedUser.username}</Link>
          </div> :
          <Link href="/signup">
            <Button text='Sign in' bgColor='white' textColor='black' />
            <Button text='Sign up' bgColor='rgb(88, 88, 228)' />
          </Link>
      }
    </div>
  )
}

export default User