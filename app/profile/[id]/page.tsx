'use client';

import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import office from '../../../public/assets/office.png';
import userPhoto from '../../../public/assets/User Avatar 2.svg';

interface Props {
    params: {
        id: string
    }
}

const Profile = ({ params: { id } }: Props) => {
    return (
        <section className={styles.profile}>
            <div className={styles.container}>
                <Image src={office} alt="office" className={styles.profileBg} />
                <Image src={userPhoto} alt="user photo" width={150} height={150}
                    className={styles.userPhoto} />
                <h3>{id}</h3>
                <p>$100k</p>
            </div>
        </section>
    )
}

export default Profile