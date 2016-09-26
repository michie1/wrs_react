import React from 'react';

export class Change extends React.Component {
  onChange() {
    console.log(this.refs.name.value);
    console.log(this.state);
  }

  render() {
    return (
      <div>
        Naam: <input type="text" ref="name" value={this.props.name} onChange={this.onChange.bind(this)} />
      </div>
    );
  }
}
