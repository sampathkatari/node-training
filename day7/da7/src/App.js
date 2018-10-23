import React, { Component } from 'react';
import DemoComponent from './component';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  componentWillMount() {
    //Called when the component is about to load.
    //We can use setState
  }
  componentDidMount() {
    //Called immediately when the component is loaded.
    //We can use setState
  }
  componentWillReceiveProps(prevProps, nextProps) {
    
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {

  }
  componentWillUnmount() {
    //Will be called when this component is getting unmounted
  }
  render() {
    return (
      <div>
        App
        1 related data display
        <ErrorBoundary>
          Counter Component 
          <br />
          <DemoComponent />
        </ErrorBoundary>
        <hr />
        <ErrorBoundary>
          Counter Component 
          <br />
          <DemoComponent />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
