import React from 'react';
import { connect } from 'react-redux';
import { logoutSuccess, login } from './reducer/session';

const Login = (props) => {
    const { loggedIn, logoutSuccess, login, errorMessage } = props;
    return (
        <div>
            Login Form
            {
                loggedIn ? (
                    <div>
                        <p>You are logged In Successfully</p>
                        <button onClick={() => logoutSuccess()}>Logout</button>
                    </div>
                ) : (
                    <button onClick={() => login('sampath', 'sampath')}>Login</button>
                )
            }
            {
                errorMessage && <p>{errorMessage}</p>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    loggedIn: state.session.loggedIn,
    errorMessage : state.session.error
});

const mapDispatchToProps = (dispatch) => ({
    login: (username, password) => dispatch(login(username, password)),
    logoutSuccess: () => dispatch(logoutSuccess())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);