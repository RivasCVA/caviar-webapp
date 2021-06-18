import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Color from 'util/Color';

type Props = {
    title: string;
    onClick: () => void;
};

const Button = (props: Props): JSX.Element => {
    const { title, onClick } = props;
    return (
        <button className={css(styles.container)} onClick={onClick} type="button">
            {title}
        </button>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.caviarGreen,
        color: Color.white,
        width: 120,
        height: 40,
        borderWidth: 0,
        borderRadius: 8,
        font: '500 18px Poppins',
        cursor: 'pointer',
        transition: 'transform 450ms',
        ':hover': {
            transform: 'scale(1.05)',
        },
    },
});
