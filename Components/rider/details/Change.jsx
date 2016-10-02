import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setName, getRiderState} from '../../../actionCreators';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export class Change extends React.Component {
  //mixins: [PureRenderMixin]

  componentDidMount() {
    console.log('component did mount');
    //console.log(this.props.getRiderState());
  }

  setName = (e) => {
    return this.props.setName(e.target.value);
  }

  render() {
    const {name} = this.props;
    return (
      <div>
        Naam: <input type="text" ref="name" value={name} onChange={this.setName} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.getIn(['rider', 'name'])
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setName,
    getRiderState
  }, dispatch);
}

export const ChangeContainer = connect(mapStateToProps, mapDispatchToProps)(Change);
