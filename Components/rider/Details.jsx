import React from 'react';
import {Info} from './details/Info.jsx';
import {ChangeContainer as Change} from './details/Change.jsx';
import {Rider as Results} from '../result/Rider.jsx';
import {fromJS} from 'immutable';

export class Details extends React.Component {
  render() {
    const {rider, results} = this.props;
    return (
      <div>
        <Info rider={rider} />
        <Results results={results}/>
        <Change />
      </div>
    );
  }
}
