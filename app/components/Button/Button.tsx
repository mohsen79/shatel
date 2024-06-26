import React, { MouseEventHandler } from 'react';

const Button = ({ text, bgColor, textColor = 'white', border = 'none' }: { text: string, bgColor: string, textColor?: string, border?: string }) => {
    const styles = {
        padding: "1rem",
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: bgColor,
        color: textColor,
        border: border,
        fontSize: '.8rem',
        whiteSpace: 'nowrap'
    }

    return (
        <button style={styles}>{text}</button>
    )
}

export default Button