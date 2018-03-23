import React, { Component } from 'react';

class CreateNewEntity extends Component {
  state = {
    entityName: ''
  };

  handleKeyPress(e) {
    if (e.keyCode === 13) {
      // ENTER
      console.log('new entity submitted');
      this.props.onCreate(e.target.value);
      this.setState({ entityName: '' });
    }
  }

  render() {
    return (
      <div className="CreateNewEntity">
        <input
          className="InputField"
          placeholder="Enter a user name..."
          type="text"
          value={this.state.entityName}
          autoFocus={true}
          onChange={e => this.setState({ entityName: e.target.value })}
          onKeyDown={this.handleKeyPress.bind(this)}
        />
      </div>
    );
  }
}

export default CreateNewEntity;
