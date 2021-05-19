import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const SandboxPage = (): JSX.Element => {
    return (
        <div className={css(styles.container)}>
            <h1>Sandbox Environment</h1>
            <h3>Showcase our design system</h3>
        </div>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#fffeee',
    },
});

export default SandboxPage;
