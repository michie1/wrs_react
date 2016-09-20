import React from 'react';
import {Info} from './details/Info.jsx';
import {Rider as Results} from '../result/Rider.jsx';

export class Details extends React.Component {
  render() {
    return (
      <div>
        <Info name={this.props.rider.name} licence={this.props.rider.licence} />
        <Results results={this.props.results}/>
      </div>
    );
  }
}
