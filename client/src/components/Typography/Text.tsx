import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Color from 'util/Color';

type Props = {
    style?: React.CSSProperties;
    children: string;
    light?: boolean;
};

const Text = (props: Props): JSX.Element => {
    const { style, children, light = false } = props;
    return <p className={css(styles.text, light && styles.whiteColor, style)}>{children}</p>;
};

export default Text;

const styles = StyleSheet.create({
    text: {
        font: '400 16px Poppins',
    },
    whiteColor: {
        color: Color.white,
    },
});

export const TextStyle: React.CSSProperties = styles.text;
