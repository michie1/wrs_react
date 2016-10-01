import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {rename} from '../../../actionCreators';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export class Change extends React.Component {
  //mixins: [PureRenderMixin]

  rename = (e) => {
    return this.props.rename(e.target.value);
  }

  render() {
    const {name} = this.props;
    return (
      <div>
        Naam: <input type="text" ref="name" value={name} onChange={this.rename} />
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
    rename
  }, dispatch);
}

export const ChangeContainer = connect(mapStateToProps, mapDispatchToProps)(Change);
