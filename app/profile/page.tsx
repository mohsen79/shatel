'use client';

import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import office from '../../public/assets/office.png';
import { useSearchParams } from 'next/navigation'

const Profile = () => {
    const params = useSearchParams();

    return (
        <section className={styles.profile}>
            <div className={styles.container}>
                <Image src={office} alt="office" className={styles.profileBg} />
                <Image src={JSON.parse(params.get('photo') as string)?.src} alt="user photo" width={150} height={150}
                    className={styles.userPhoto} />
                <h3>{params.get('name')}</h3>
                <p>${params.get('revenue') || 0}k in revenue</p>
            </div>
        </section>
    )
}

export default Profile