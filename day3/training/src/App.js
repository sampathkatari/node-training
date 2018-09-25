import React from 'react';
import Button from './button';

export class App extends React.Component {
  render() {
    return (
      <div>
      <div>
        Header
      </div>
      <div>
        Content
        <Button text='Button One' color='primary'/>
        <Button text='Button Two' color='secondary'/>
        <Button text='Button Three' />
      </div>
      <div>
        Footer
        <div>
          I am footer
          <Button text='Button Footer' />
        </div>
      </div>
      </div>
    )
  }
}
export class Demo extends React.Component {
  render() {
    return (
      <div>
        Demo
      </div>
    )
  }
}
