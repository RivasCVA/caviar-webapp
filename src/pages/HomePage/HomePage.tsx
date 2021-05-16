import React from 'react';
import { StyleSheet, css } from 'aphrodite';

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
        backgroundColor: '#5499C7',
        color: '#ffffff',
    },
});

export default HomePage;
