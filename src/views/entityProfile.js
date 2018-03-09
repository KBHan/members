import React, { Component } from 'react';
import EntityProfileEditForm from '../forms/entityProfileEdit';

class EntityProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleStatus: false
    };

    this.handleToggleEdit = this.handleToggleEdit.bind(this);
  }

  handleToggleEdit(e) {
    this.setState({
      toggleStatus: !this.state.toggleStatus
    });
    //alert(this.state.toggleStatus);
  }
  render() {
    const profileTable = <div> A table of profile provided </div>;
    const profileForm = (
      <div>
        <EntityProfileEditForm />
      </div>
    );
    var toggleEdit = this.state.toggleStatus ? 'View' : 'Edit';

    return (
      <div>
        {' '}
        This is Profile
        <div> {this.state.toggleStatus ? profileForm : profileTable} </div>
        <br />
        <button onClick={this.handleToggleEdit}> {toggleEdit} </button>
      </div>
    );
  }
}

export default EntityProfile;
