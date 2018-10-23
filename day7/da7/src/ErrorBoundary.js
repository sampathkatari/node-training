import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: undefined
        }
    }
    componentDidCatch(error, errorInfo) {  
        console.log(error, errorInfo)      
        this.setState({ 
            error: error
        })
    }
    render() {
        console.log(this.state)
        if(this.state.error) {
            return (
                <h1>Something Went Wrong</h1>
            )
        }
        return this.props.children;
    }
}