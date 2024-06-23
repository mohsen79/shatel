import React from 'react';
import styles from './Checkbox.module.css';

const Checkbox = ({ label }: { label: string }) => {
    return (
        <div className={styles.checkbox}>
            <input type="checkbox" />
            <label>{label}</label>
        </div>
    )
}

export default Checkbox