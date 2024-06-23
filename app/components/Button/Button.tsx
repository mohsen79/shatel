import React from 'react';

const Button = ({ text, bgColor }: { text: string, bgColor: string }) => {
    const styles = {
        padding: "1rem",
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: bgColor
    }

    return (
        <button style={styles}>{text}</button>
    )
}

export default Button