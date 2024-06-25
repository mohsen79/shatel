import React from 'react';

const Button = ({ text, bgColor, textColor = 'white' }: { text: string, bgColor: string, textColor?: string }) => {
    const styles = {
        padding: "1rem",
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: bgColor,
        color: textColor
    }

    return (
        <button style={styles}>{text}</button>
    )
}

export default Button