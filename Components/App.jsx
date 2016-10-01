import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Details as RiderDetails} from './rider/Details.jsx';
import {rename} from '../actionCreators';

export class App extends React.Component {
  render() {
    const {rider, results} = this.props;
    const {name} = rider.toJS();
    return (
      <div>
        <h1>Hallo! {name}</h1>
        <RiderDetails rider={rider} results={results} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rider: state.get('rider'),
    results: state.get('results')
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    //rename
  }, dispatch);
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
