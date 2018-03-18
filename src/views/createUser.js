import React, { Component } from 'react';

import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import CreateNewUser from './createNewUser';
import ShowAllUsers from './showAllUsers';

const USER_NAME_KEY = 'USER_NAME';
const USER_ID_KEY = 'USER_ID';

class CreateUser extends Component {
  state = {
    userName: ''
  };

  async componentWillMount() {
    let name = localStorage.getItem(USER_NAME_KEY);
    if (!name) {
      name = this.state.userName;
      const result = await this.props.createUserMutation({
        variables: { name }
      });
      //const personData = { name, id: 'asd'}
      localStorage.setItem(USER_NAME_KEY, result.data.createUser.name);
      localStorage.setItem(USER_ID_KEY, result.data.createUser.id);
      this.forceUpdate();
    }
  }

  render() {
    const name = localStorage.getItem(USER_NAME_KEY);
    const userId = localStorage.getItem(USER_ID_KEY);
    return (
      <div className="CreateUser">
        Create New
        <CreateNewUser
          name={name}
          id={userId}
          onTextInput={name => this.setState({ userName: name })}
          onResetText={this._resetText}
          onSend={this._onSend}
        />
        Show All
        <ShowAllUsers
          names={this.props.allUsersQuery.allUsers || []}
          endRef={this._endRef}
        />
      </div>
    );
  }

  _onSend = () => {
    console.log(`Send: ${this.state.userName}`);
    this.props.createUserMutation({
      variables: {
        name: this.state.userName
      }
    });
  };

  _resetText = () => {
    this.setState({ userName: '' });
  };

  _endRef = element => {
    this.endRef = element;
  };
}

const ALL_USERS_QUERY = gql`
  query AllUsersQuery {
    allUsers(last: 100) {
      id
      name
    }
  }
`;

const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($userName: String!) {
    createUser(name: $userName) {
      id
      name
    }
  }
`;

export default compose(
  graphql(ALL_USERS_QUERY, { name: 'allUsersQuery' }),
  graphql(CREATE_USER_MUTATION, { name: 'createUserMutation' })
)(CreateUser);
