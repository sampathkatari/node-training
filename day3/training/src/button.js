import React from 'react';
import './button.css';

class Button extends React.Component {
    render() {
        return (
            <button className={this.props.color}>
                {this.props.text}
            </button>
        )
    }
}

export default Button;