import React, { useState } from 'react';
import styles from './Input.module.css';
import { UseFormRegisterReturn } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


interface Props {
    label?: string,
    type?: string,
    placeholder?: string,
    icon?: IconProp
    error?: UseFormRegisterReturn,
}

const Input = ({ label, type = 'text', placeholder, icon, error }: Props) => {
    const [inputType, setInputType] = useState(type);

    const showPassword = () => {
        inputType === 'text' ? setInputType('password') : setInputType('text');
    }

    return (
        <div className={styles.inputBox}>
            <label><b>{label}</b></label>
            <div className={styles.input}>
                <input
                    {...error}
                    type={inputType} placeholder={placeholder}
                />
                {icon?.iconName === 'eye' &&
                    <FontAwesomeIcon onClick={showPassword}
                        className={styles.icon} width={20} icon={icon}
                    />}
            </div>
        </div>
    )
}

export default Input