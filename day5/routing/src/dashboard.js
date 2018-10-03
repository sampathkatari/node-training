import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Profile from './profile';
import Settings from './settings';

const Dashboard = () => {
    return (
        <div>
            Dashboard
            <br />
            <NavLink to='/dashboard/profile'>Profile</NavLink>
            <br />
            <NavLink to='/dashboard/settings'>Settings</NavLink>
            <div>
            <Switch>
                <Route path='/dashboard/profile' exact component={Profile} />
                <Route path='/dashboard/settings' exact component={Settings} />
            </Switch>
            </div>
        </div>
    )
}

export default Dashboard;