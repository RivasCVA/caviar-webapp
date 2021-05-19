import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';

const App = (): JSX.Element => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
        </main>
    );
};

export default App;
