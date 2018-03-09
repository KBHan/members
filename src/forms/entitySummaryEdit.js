import React, { Component } from 'react';
//import profileObject from './yupObjects';
/* 
var Form = require('react-formal'), yup = require('yup');

// if we are using a different set of inputs
// we can set some defaults once at the beginning
Form.addInputTypes(require('react-formal-inputs'));

//var defaultStr = yup.string().default('')

var modelSchema = yup.object({
  summary: profileObject
});
 */
class EntitySummaryEditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendToParent = this.sendToParent.bind(this);
  }

  sendToParent(content) {
    this.props.onFormSubmit(content);
  }

  handleChange(e) {
    this.setState({ content: e.target.value });
    this.sendToParent(e.target.value);
    console.log(this.state.content);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Summary"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EntitySummaryEditForm;
