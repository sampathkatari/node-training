import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props); //This is mandatory as first statement inside a constructor
        this.state = { 
            username: '',
            email: props.email || '',
            password: '',
            confirmPassword: ''
        }
    }
    onInputChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }
    onSubmit() {
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <h1>Sign Up Form</h1>
                <br />
                <label>UserName</label>
                <input name='username' value={this.state.username} onChange={this.onInputChange.bind(this)}/>
                <br />
                <label>Email</label>
                <input name='email' value={this.state.email} onChange={this.onInputChange.bind(this)}/>
                <br />
                <label>Password</label>
                <input name='password' value={this.state.password} onChange={this.onInputChange.bind(this)} />
                <br />
                {
                    this.state.password.length > 1 ? (
                        <span>
                            <label>Confirm Password</label>
                                <input name='confirmPassword' value={this.state.confirmPassword} onChange={this.onInputChange.bind(this)}/>
                            <br />
                        </span>) : null
                }
                <button onClick={this.onSubmit.bind(this)}>Sign Up</button>
            </div>
        )
    }
}

export default SignUpForm;