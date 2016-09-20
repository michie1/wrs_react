import React from 'react';

export class Info extends React.Component {
  render() {
    return (
      <ul>
        <li>Naam: {this.props.name}!</li>
        <li>Licentie: {this.props.licence}</li>
      </ul>
    );
  }
}
