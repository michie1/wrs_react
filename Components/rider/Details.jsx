import React from 'react';
import {Info} from './details/Info.jsx';

export class Details extends React.Component {
  render() {
    return (
      <Info name={this.props.rider.name} licence={this.props.rider.licence}/>
    );
  }
}
