import React, { useRef } from 'react';
import styles from './Input.module.css';
import { UseFormRegisterReturn } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
    label: string,
    type?: string,
    placeholder?: string,
    error: UseFormRegisterReturn,
    icon?: IconProp
}

const Input = ({ label, type = 'text', placeholder, error, icon }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const showPassword = () => {
        if (inputRef.current) {
            inputRef.current.type = inputRef.current.type === 'text' ? 'password' : 'text';
        }
    }

    return (
        <div className={styles.inputBox}>
            <label><b>{label}</b></label>
            <div className={styles.input}>
                <input {...error}
                    ref={inputRef}
                    type={type} placeholder={placeholder} />
                {icon?.iconName === 'eye' && <FontAwesomeIcon onClick={showPassword} className={styles.icon} width={20} icon={icon} />}
            </div>
        </div>
    )
}

export default Input