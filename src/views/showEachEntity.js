import React, { Component } from 'react';

class ShowEachEntity extends Component {
  render() {
    return (
      <div className="ShowEachEntity">
        <div className="EntityName">{this.props.name}</div>
      </div>
    );
  }
}

export default ShowEachEntity;
