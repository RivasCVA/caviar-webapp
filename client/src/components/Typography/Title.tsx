import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Color from 'util/Color';

export type Props = {
    style?: React.CSSProperties;
    children: string;
    light?: boolean;
};

const Title = (props: Props): JSX.Element => {
    const { style, children, light = false } = props;
    return <h2 className={css(styles.title, light && styles.whiteColor, style)}>{children}</h2>;
};

export default Title;

const styles = StyleSheet.create({
    title: {
        font: '500 28px Roboto Mono',
        textAlign: 'center',
        padding: '0px 10px',
    },
    whiteColor: {
        color: Color.white,
    },
});

export const TitleStyle: React.CSSProperties = styles.title;
