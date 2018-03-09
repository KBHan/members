import React, { Component } from 'react';
import EntityContactEditForm from '../forms/entityContactEdit';

class EntityContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        {
          name: 'Tom D. Harry',
          phone: '303-555-1212',
          email: 'tdh@eamil.com'
        },
        {
          name: 'Larry M. Curly',
          phone: '720-555-1212',
          email: 'lmc@eamil.com'
        }
      ],
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
    const contactTable = contact => {
      return contact.map((each, i) => {
        var contactType = i === 0 ? 'Primary Contact' : 'Other Contact(s)';
        return (
          <table>
            {' '}
            {contactType}
            <tr>
              <td>Name: </td>
              <td>{each.name}</td>
            </tr>
            <tr>
              <td>Phone: </td>
              <td>{each.phone}</td>
            </tr>
            <tr>
              <td>Email: </td>
              <td>{each.email}</td>
            </tr>
          </table>
        );
      });
    };

    const contactForm = (
      <div>
        <EntityContactEditForm />
      </div>
    );

    var toggleEdit = this.state.toggleStatus ? 'View' : 'Edit';

    return (
      <div>
        <u> This is Contact </u>
        <div>
          {' '}
          {this.state.toggleStatus
            ? contactForm
            : contactTable(this.state.contacts)}{' '}
        </div>
        <br />
        <button onClick={this.handleToggleEdit}> {toggleEdit} </button>
      </div>
    );
  }
}

export default EntityContact;
