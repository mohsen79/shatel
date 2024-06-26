'use client';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './Comments.module.css';
import Image from "next/image";
import userPhoto from '../../../public/assets/User Avatar.svg'
import userPhoto2 from '../../../public/assets/User Avatar 2.svg'
import userPhoto3 from '../../../public/assets/User Avatar 32.svg'
import Button from "../Button/Button";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { useRouter } from "next/compat/router";

const Comments = () => {
    const router = useRouter();
    console.log(router);

    const users = [
        { photo: userPhoto, username: 'Sarah Andrews', revenue: 100, description: 'lorem' },
        { photo: userPhoto2, username: 'Mathews Higgins', revenue: 20, description: 'lorem' },
        { photo: userPhoto3, username: 'Janice Dave', revenue: 30, description: 'lorem' },
        { photo: userPhoto, username: 'Sarah Andrews', revenue: 100, description: 'lorem' },
        { photo: userPhoto2, username: 'Mathews Higgins', revenue: 20, description: 'lorem' },
        { photo: userPhoto3, username: 'Janice Dave', revenue: 30, description: 'lorem' },
    ]
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1220, min: 768 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };

    return <div className={styles.comments}>
        <Carousel responsive={responsive} arrows={false} sliderClass={styles.container}>
            {users.map((user, index) =>
                <div key={index} className={styles.comment}>
                    <div className={styles.author}>
                        <Image src={user.photo} alt="user porfile photo" />
                        <div className={styles.info}>
                            <h4>{user.username}</h4>
                            <div>${user.revenue}k in revenue</div>
                        </div>
                    </div>
                    <p className={styles.message}>
                        Lorem ipsum dolor sit amet consectetur ads quaerat optio, quo obcaecati, quis ipsum.
                    </p>
                    <Link
                        href='/profile/1'
                    >
                        <Button border="2px solid rgb(218, 218, 218)" text={`View ${user.username} protfolio`} bgColor="white" textColor="rgb(88, 88, 228)" />
                    </Link>
                </div>
            )}
        </Carousel >
    </div >

}

export default Comments