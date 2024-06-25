import React from 'react';
import styles from './page.module.css';
import Input from '../components/Input/Input';
import Checkbox from '../components/Checkbox/Checkbox';
import Button from '../components/Button/Button';
import Image from 'next/image';
import Carousel from '../../public/assets/Sign Up Image.png';
import Link from 'next/link';
import hide from '../../public/assets/hide\ password.svg';

const Signup = () => {
    return (
        <div className={styles.signup}>
            <section className={styles.inputSection}>
                <div className={styles.authForm}>
                    <h4>Fiber</h4>
                    <h2>Creat Your Fiber Account</h2>
                    <form>
                        <Input label="Your Name" placeholder='John Doe' />
                        <Input label="E-mail" type="email" placeholder='John@example.com' />
                        <Input label="Password" type="password" placeholder='At least 8 characters' />
                        <div className={styles.termCondition}>
                            <Checkbox label="By Creating an account on Fiber, you agree to the" />
                            <u>Terms & Conditions</u>
                        </div>
                        <Button text="Create Fiber Account" bgColor="rgb(88, 88, 228)" />
                        <span>Already have an account? <Link href="/">Sign in</Link></span>
                    </form>
                </div>
            </section>
            <section className={styles.carousel}>
                <Image src={Carousel} alt="Sign Up Image" />
                <div className={styles.carouselInfo}>
                    <h2>Unparalleled Template</h2>
                    <p>Crafted by a team of professional designers, our templates are eunparalleled in the market</p>
                    <div className={styles.circles}>
                        <span className={styles.circle}></span>
                        <span className={styles.circle}></span>
                        <span className={styles.circle}></span>
                        <span className={styles.circle}></span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup