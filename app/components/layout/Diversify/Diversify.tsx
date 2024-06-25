import React from 'react';
import styles from './Diversify.module.css';
import diversify from '../../../../public/assets/Page Image.png';
import Image from 'next/image';
import Button from '../../Button/Button';


const Diversify = () => {
    return (
        <section className={styles.diversify}>
            <div className={styles.info}>
                <h2>Diversify your portfolio</h2>
                <p>Create an even more impressive portfolio by creating
                    case studies for your projects. Simply follow our
                    step-by-step guide
                </p>
                <Button text="Start Free Trial" bgColor='white' textColor='rgb(88, 88, 228)' />
            </div>
            <Image src={diversify} alt='diverisfy' />
        </section>
    )
}

export default Diversify