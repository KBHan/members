import React, { Component } from 'react';
import EntitySummary2EditForm from '../forms/entitySummary2Edit';

class EntitySummary2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      summaryContent:
        "Here's the story \
      Of a lovely lady \
      Who was bringing up three very lovely girls \
      All of them had hair of gold \
      Like their mother \
      The youngest one in curls ",
      toggleStatus: false
    };

    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(summary) {
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
        <EntitySummary2EditForm onSubmit={this.handleSubmit} />
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

export default EntitySummary2;
