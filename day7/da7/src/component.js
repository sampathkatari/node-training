import React, { Component, Fragment } from 'react';

class DemoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    incrementCounter(evt) {
        this.setState({ counter: this.state.counter + 1 })
    }
    render() {
        console.log(this.state.counter)
        if(this.state.counter === 3) {
            console.log('error')
            throw new Error('Crashed at value 3!');
        } else {
            return (
                <div>
                    Counter: {this.state.counter}
                    <button onClick={this.incrementCounter.bind(this)}>Increment</button>
                </div>
            )
        }
    }
}

export default DemoComponent;

