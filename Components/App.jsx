import React from 'react';
import RiderDetails from './RiderDetails.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.receiver = 'Michi!el';
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.receiver}!</h1>
        <RiderDetails />
      </div>
    );
  }
}
