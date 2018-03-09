import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuSelection: ''
    };

    this.handleSummaryClick = this.handleSummaryClick.bind(this);
    this.handleSummary2Click = this.handleSummary2Click.bind(this);
    this.handleProfileClick = this.handleProfileClick.bind(this);
    this.handleSupportClick = this.handleSupportClick.bind(this);
    this.handleServicesClick = this.handleServicesClick.bind(this);
    this.handleContactClick = this.handleContactClick.bind(this);

    this.handleMenuSelection = this.handleMenuSelection.bind(this);
  }
  handleMenuSelection() {
    this.props.onSelect(this.state.menuSelection);
  }

  handleSummaryClick(e) {
    console.log('summary clicked');
    this.setState({
      menuSelection: 'summary'
    });
    this.handleMenuSelection();
    console.log(this.state.menuSelection);
  }
  handleSummary2Click(e) {
    console.log('summary2 clicked');
    this.setState({
      menuSelection: 'summary2'
    });
    this.handleMenuSelection();
    console.log(this.state.menuSelection);
  }

  handleProfileClick(e) {
    console.log('profile clicked');
    this.setState({
      menuSelection: 'profile'
    });
    this.handleMenuSelection();
    console.log(this.state.menuSelection);
  }

  handleSupportClick(e) {
    console.log('support clicked');
    this.setState({
      menuSelection: 'support'
    });
    this.handleMenuSelection();
    console.log(this.state.menuSelection);
  }
  handleServicesClick(e) {
    console.log('service clicked');
    this.setState({
      menuSelection: 'services'
    });
    this.handleMenuSelection();
    console.log(this.state.menuSelection);
  }
  handleContactClick(e) {
    console.log('contact clicked');
    this.setState({
      menuSelection: 'contact'
    });
    this.handleMenuSelection();
    console.log(this.state.menuSelection);
  }

  render() {
    return (
      <div>
        <p onClick={this.handleSummaryClick}>
          <u> Summary </u>
        </p>
        <p onClick={this.handleSummary2Click}>
          <u> Summary2 </u>
        </p>
        <p onClick={this.handleProfileClick}>
          <u> Profile </u>
        </p>
        <p onClick={this.handleSupportClick}>
          <u> Biz/Co-op Support </u>
        </p>
        <p onClick={this.handleServicesClick}>
          <u> Services </u>
        </p>
        <p onClick={this.handleContactClick}>
          <u> Contact </u>
        </p>
      </div>
    );
  }
}

export default Sidebar;
