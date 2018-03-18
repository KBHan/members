import React, { Component } from 'react';

class CreateNewUser extends Component {
  render() {
    return (
      <div className="CreateNewUser">
        <input
          className="InputField"
          placeholder="Enter a user name..."
          type="text"
          value={this.props.name}
          autoFocus={true}
          onChange={e => this.props.onTextInput(e.target.value)}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              // ENTER
              console.log('new user submitted');
              this.props.onSend();
              console.log('props.onSend()');
              this.props.onResetText();
              console.log('props.onResetText()');
            }
          }}
        />
      </div>
    );
  }
}

export default CreateNewUser;
