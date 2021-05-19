import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import SandboxPage from 'pages/SandboxPage';

const App = (): JSX.Element => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/sandbox" component={SandboxPage} />
            </Switch>
        </main>
    );
};

export default App;
