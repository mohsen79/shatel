import React from 'react';
import styles from './Input.module.css';

interface Props {
    label: string,
    type?: string,
    placeholder?: string,
}

const Input = ({ label, type = 'text', placeholder }: Props) => {

    return (
        <div className={styles.input}>
            <label><b>{label}</b></label>
            <input className={label === 'Password' ? styles.hideIcon : ''} type={type} placeholder={placeholder} />
        </div>
    )
}

export default Input