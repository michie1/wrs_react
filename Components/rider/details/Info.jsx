import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {onRider, emitRider} from '../../../actionCreators';

export class Info extends React.Component {

  static contextTypes = {
    socket: React.PropTypes.object.isRequired
  };
   
  componentDidMount() {
    const {socket} = this.context;
    const {onRider, emitRider} = this.props;
    onRider(socket);
    emitRider(socket);
  }

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

function mapStateToProps(state) {
  return {
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onRider,
    emitRider
  }, dispatch);
}

export const InfoContainer = connect(mapStateToProps, mapDispatchToProps)(Info);
