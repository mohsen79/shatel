import React from 'react';
import styles from './Input.module.css';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
    label: string,
    type?: string,
    placeholder?: string,
    error: UseFormRegisterReturn
}

const Input = ({ label, type = 'text', placeholder, error }: Props) => {
    return (
        <div className={styles.input}>
            <label><b>{label}</b></label>
            <input {...error} className={label === 'Password' ? styles.hideIcon : ''} type={type} placeholder={placeholder} />
        </div>
    )
}

export default Input