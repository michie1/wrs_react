import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Details as RiderDetails } from './rider/Details.jsx';

export class App extends React.Component {

  constructor() {
    super();
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
    let rename = () => {
      return this.props.rename('hoi');
    }

    return (
      <div>
        <h1>Hello! {this.props.name}</h1>
        <RiderDetails rider={this.rider} results={this.results} />
        <button onClick={rename}>
          Rename
        </button>
      </div>
    );
  }
}

function rename(name) {
  return {
    type: 'rename',
    name: name
  };
}

function mapStateToProps(state) {
  return {
    hoi: state.get('hoi'),
    name: state.get('name')
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({rename}, dispatch);
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
