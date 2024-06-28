'use client';

import React from 'react';
import styles from './page.module.css';
import Input from '../components/Input/Input';
import Checkbox from '../components/Checkbox/Checkbox';
import Button from '../components/Button/Button';
import Image from 'next/image';
import Carousel from '../../public/assets/Sign Up Image.png';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { signupValidationScheam } from '../schema/signupValidation';
import { useForm } from 'react-hook-form';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type IssueForm = z.infer<typeof signupValidationScheam>;

const Signup = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<IssueForm>({
        resolver: zodResolver(signupValidationScheam)
    });

    const customIcon = faEye as IconProp;

    const registerUser = async (data: object) => {
        try {
            const res = await fetch('api/auth/register', {
                method: "POST",
                body: JSON.stringify(data)
            });

            if (res.ok) {
                router.push('/');
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className={styles.signup}>
            <section className={styles.inputSection}>
                <div className={styles.authForm}>
                    <h4><Link href="/">Fiber</Link></h4>
                    <h2>Creat Your Fiber Account</h2>
                    <form
                        onSubmit={handleSubmit((data) => registerUser(data))}>
                        <div>
                            <Input label="Your Name" placeholder='John Doe' error={register('username')} />
                            <p className={styles.errorMsg}>{errors.username?.message}</p>
                        </div>
                        <div>
                            <Input label="E-mail" type="email" placeholder='John@example.com' error={register('email')} />
                            <p className={styles.errorMsg}>{errors.email?.message}</p>
                        </div>
                        <div>
                            <Input icon={faEye} label="Password" type="password" placeholder='At least 8 characters' error={register('password')} />
                            <p className={styles.errorMsg}>{errors.password?.message}</p>
                        </div>
                        <div className={styles.termCondition}>
                            <Checkbox label="By Creating an account on Fiber, you agree to the" />
                            <u>Terms & Conditions</u>
                        </div>
                        <Link href="/api/auth/signin">
                            <Button width='100%' text="Sign Up with Google" bgColor="#fbf8f3" textColor='black' />
                        </Link>
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