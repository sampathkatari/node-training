import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './login';
import Register from './register';
import Dashboard from './dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        Main Component
        <br />
        <NavLink to='/login'>Login Page</NavLink>
        <br />
        <NavLink to='/register'>Register</NavLink>
        <br />
        <NavLink to='/dashboard'>Dashboard</NavLink>
        <Switch>
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
