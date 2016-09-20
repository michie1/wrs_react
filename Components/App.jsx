import React from 'react';
import {Details as RiderDetails} from './rider/Details.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.receiver = 'Michi!el';
    this.rider = {
      name: 'naam',
      licence: 'amateur'
    };
  }

  render() {
    return (
      <div>
        <h1>Hello!, {this.receiver}!</h1>
        <RiderDetails rider={this.rider}/>
      </div>
    );
  }
}
