import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Details as RiderDetails} from './rider/Details.jsx';
import {fetchRider, onRider, emitRider} from '../actionCreators';

export class App extends React.Component {
  static childContextTypes = {
    socket: React.PropTypes.object.isRequired
  }

  getChildContext() {
    return {
      socket: this.props.socket
    };
  }

 

  componentDidMount() {
    const {socket, fetchRider} = this.props;
    //console.log(this.props.getRiderState());
    fetchRider();

    //onRider(socket);
    //emitRider(socket);
  }

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
    fetchRider,
  }, dispatch);
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
