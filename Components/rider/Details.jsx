import React from 'react';
import {Info} from './details/Info.jsx';
import {Change} from './details/Change.jsx';
import {Rider as Results} from '../result/Rider.jsx';

export class Details extends React.Component {
  render() {
    return (
      <div>
        <Info name={this.props.rider.name} licence={this.props.rider.licence} />
        <Change name={this.props.rider.name} />
        <Results results={this.props.results}/>
      </div>
    );
  }
}
