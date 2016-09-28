import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Details as RiderDetails} from './rider/Details.jsx';
import {rename} from '../actionCreators';

export class App extends React.Component {
  rename = () => {
    console.log('rename');
    return this.props.rename('hoi');
  }

  render() {
    return (
      <div>
        <h1>Hello! {this.props.name}</h1>
        <RiderDetails rider={this.props.rider} results={this.props.results} />
        <button onClick={this.rename}>
          Rename
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.get('name'),
    rider: state.get('rider'),
    results: state.get('results')
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({rename}, dispatch);
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
