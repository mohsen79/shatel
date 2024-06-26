import React, { MouseEventHandler } from 'react';

const Button = ({ text, bgColor, textColor = 'white', border = 'none', onClick, width }: { text: string, bgColor: string, textColor?: string, border?: string, onClick?: MouseEventHandler, width?: string }) => {
    const styles = {
        width: width,
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
        <button onClick={onClick} style={styles}>{text}</button>
    )
}

export default Button