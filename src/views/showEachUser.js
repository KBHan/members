import React, { Component } from 'react';

class ShowEachUser extends Component {
  render() {
    return (
      <div className="ShowEachUser">
        <div className="UserName">{this.props.name}</div>
      </div>
    );
  }
}

export default ShowEachUser;
