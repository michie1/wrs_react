import React from 'react';

export default class RiderDetails extends React.Component {
  constructor() {
    super();
    this.name = 'Michiel';
    this.license = 'Elite';
  }

  render() {
    return (
      <ul>
        <li>Naam: {this.name}</li>
        <li>Licentie: {this.license}</li>
      </ul>
    );
  }
}
