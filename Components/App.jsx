import React from 'react';
import { Details as RiderDetails } from './rider/Details.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.receiver = 'Michi!el';
    this.rider = {
      name: 'Michiel',
      licence: 'Elite',
    };
    this.results = [{
      race: {
        name: 'Ronde van de Lier',
      },
      result: '12',
    }, {
      race: {
        name: 'Ronde van de Race',
      },
      result: '21',
    }];
  }

  render() {
    return (
      <div>
        <h1>Hello!, {this.receiver}!</h1>
        <RiderDetails rider={this.rider} results={this.results} />
      </div>
    );
  }
}
