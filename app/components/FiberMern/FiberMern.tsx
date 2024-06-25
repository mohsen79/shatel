import React from 'react';
import styles from './FiberMern.module.css';
import Image from 'next/image';

interface Props {
    icon: string,
    title: string,
    description: string
}

const FiberMern = ({ icon, title, description }: Props) => {
    return (
        <div className={styles.fiberMern}>
            <Image src={icon} alt="fiber mern" />
            <b>{title}</b>
            <p>{description}</p>
        </div>
    )
}

export default FiberMern