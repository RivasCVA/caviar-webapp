import React from 'react';
import { StyleSheet, css } from 'aphrodite';

type Props = {
    title: string;
    children: JSX.Element | JSX.Element[];
};

const Community = (props: Props): JSX.Element => {
    const { title, children } = props;
    return (
        <div className={css(styles.container)}>
            <h2 className={css(styles.title)}>{title}</h2>
            <div className={css(styles.grid)}>{children}</div>
        </div>
    );
};

export default Community;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        font: '500 28px Roboto Mono',
        paddingBottom: 15,
    },
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: 'min(750px, 100%)',
    },
});
