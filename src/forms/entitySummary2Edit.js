import React, { Component } from 'react';

class EntitySummary2EditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      summary: ''
    };

    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* andleSubmit(e) {
    //e.preventDefault();
    this.setState({
      content: this.refs.summary.value
    });
    e.preventDefault();
    console.log(this.state.summary);
    this.props.onSubmit(this.state.summary);
  } */

  render() {
    return <div>SUMMARY edit form goes here</div>;
  }
}

export default EntitySummary2EditForm;
