import React from 'react';
import styles from './Input.module.css';

interface Props {
    label: string,
    type: string,
    placeholder?: string
}

const Input = ({ label, type, placeholder }: Props) => {
    return (
        <div className={styles.input}>
            <label><b>{label}</b></label>
            <input type={type} placeholder={placeholder} />
        </div>
    )
}

export default Input