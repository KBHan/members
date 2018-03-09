import React, { Component } from 'react';
import EntitySummaryEditForm from '../forms/entitySummaryEdit';

class EntitySummary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      summaryContent: '',
      toggleStatus: false
    };

    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(summary) {
    this.setState({
      summaryContent: summary
    });
  }

  handleToggleEdit(e) {
    this.setState({
      toggleStatus: !this.state.toggleStatus
    });
    //alert(this.state.toggleStatus);
  }
  render() {
    const summaryTable = <div>{this.state.summaryContent}</div>;
    const summaryForm = (
      <div>
        <EntitySummaryEditForm onFormSubmit={this.handleFormSubmit} />
      </div>
    );
    var toggleEdit = this.state.toggleStatus ? 'View' : 'Edit';

    return (
      <div>
        This is Summary
        <div> {this.state.toggleStatus ? summaryForm : summaryTable} </div>
        <br />
        <button onClick={this.handleToggleEdit}> {toggleEdit} </button>
      </div>
    );
  }
}

export default EntitySummary;
