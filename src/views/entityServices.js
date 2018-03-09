import React, { Component } from 'react';
import EntityServicesEditForm from '../forms/entityServicesEdit';

class EntityServices extends Component {
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
    const serviceTable = <div> A table of services provided </div>;
    const serviceForm = (
      <div>
        <EntityServicesEditForm />
      </div>
    );
    var toggleEdit = this.state.toggleStatus ? 'View' : 'Edit';

    return (
      <div>
        {' '}
        This is Services
        <div> {this.state.toggleStatus ? serviceForm : serviceTable} </div>
        <br />
        <button onClick={this.handleToggleEdit}> {toggleEdit} </button>
      </div>
    );
  }
}

export default EntityServices;
