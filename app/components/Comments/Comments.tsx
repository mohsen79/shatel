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
import NewComment from "./NewComment";
import { useEffect, useState } from "react";
import CommentSkeletonLoading from "./CommentSkeletonLoading";
import Cookies from 'js-cookie';

interface commentSchema {
    author: string,
    content: string,
    user_id: number
}

const Comments = () => {
    const [modalStatus, setModalStatus] = useState(false);
    const [skeletonLoading, setSkeletonLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [auth, setAuth] = useState(false);

    useEffect(() => Cookies.get('loggedUser') ? setAuth(true) : setAuth(false));

    useEffect(() => {
        const fetchComments = async () => {
            const res = await fetch('api/comment');
            const data = await res.json();
            setComments(data.reverse());
            setSkeletonLoading(false);
        }

        fetchComments();
    }, [modalStatus]);

    const users = [
        { photo: userPhoto, username: 'Sarah Andrews', revenue: 100, description: 'lorem' },
        { photo: userPhoto2, username: 'Mathews Higgins', revenue: 20, description: 'lorem' },
        { photo: userPhoto3, username: 'Janice Dave', revenue: 30, description: 'lorem' },
        { photo: userPhoto, username: 'Sarah Andrews', revenue: 100, description: 'lorem' },
        { photo: userPhoto2, username: 'Mathews Higgins', revenue: 20, description: 'lorem' },
        { photo: userPhoto3, username: 'Janice Dave', revenue: 30, description: 'lorem' },
        { photo: userPhoto3, username: 'Janice Dave', revenue: 30, description: 'lorem' },
        { photo: userPhoto3, username: 'Janice Dave', revenue: 30, description: 'lorem' },
        { photo: userPhoto3, username: 'Janice Dave', revenue: 30, description: 'lorem' },
        { photo: userPhoto3, username: 'Janice Dave', revenue: 30, description: 'lorem' },
        { photo: userPhoto3, username: 'Janice Dave', revenue: 30, description: 'lorem' },
        { photo: userPhoto3, username: 'Janice Dave', revenue: 30, description: 'lorem' },
        { photo: userPhoto3, username: 'Janice Dave', revenue: 30, description: 'lorem' },
        { photo: userPhoto3, username: 'Janice Dave', revenue: 30, description: 'lorem' },
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

    const modal = () => {
        setModalStatus(!modalStatus);
    }

    return <div className={styles.comments}>
        {modalStatus && <NewComment modalStatus={modalStatus} handleModal={modal} />}
        {auth && <Button text="add new comment" width="10%" bgColor="rgb(88, 88, 228)" onClick={modal} />}
        {skeletonLoading ? <CommentSkeletonLoading /> :
            <Carousel responsive={responsive} arrows={false} sliderClass={styles.container}>
                {comments.map((comment: commentSchema, index: number) =>
                    <div key={index} className={styles.comment}>
                        <div className={styles.author}>
                            <Image src={users[index].photo} alt="user porfile photo" />
                            <div className={styles.info}>
                                <h4>{comment.author}</h4>
                                <div>$100k in revenue</div>
                            </div>
                        </div>
                        <p className={styles.message}>
                            {comment.content}
                        </p>
                        <Link
                            href={{
                                pathname: '/profile',
                                query: {
                                    name: comment.user_id,
                                    photo: JSON.stringify(users[index].photo)
                                }
                            }}
                        >
                            <Button border="2px solid rgb(218, 218, 218)" text={`View user ${comment.author} protfolio`} bgColor="white" textColor="rgb(88, 88, 228)" />
                        </Link>
                    </div>
                )}
            </Carousel>}
    </div>

}

export default Comments