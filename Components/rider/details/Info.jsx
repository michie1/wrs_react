import React from 'react';

export class Info extends React.Component {
  render() {
    const {name, licence} = this.props.rider.toJS();
    return (
      <ul>
        <li>Naam: {name}</li>
        <li>Licentie: {licence}</li>
      </ul>
    );
  }
}
