import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Color from 'util/Color';

const HomePage = (): JSX.Element => {
    return (
        <div className={css(styles.container)}>
            <h1>Hello, World!</h1>
        </div>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: Color.blue,
        color: Color.white,
    },
});

export default HomePage;
