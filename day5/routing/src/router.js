import React from 'react';
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './login';
import Register from './register';
import Dashboard from './dashboard';

const AppRouter = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path='/' component={App}/>
            </Switch>
        </HashRouter>
    )
}

export default AppRouter;