import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import SandboxPage from 'pages/SandboxPage';
import { css, StyleSheet } from 'aphrodite';

const App = (): JSX.Element => {
    return (
        <main className={css(styles.container)}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/sandbox" component={SandboxPage} />
            </Switch>
        </main>
    );
};

const styles = StyleSheet.create({
    container: {
        overflowX: 'hidden',
    },
});

export default App;
