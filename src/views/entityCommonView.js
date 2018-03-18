import React, { Component } from 'react';

import EntityProfile from './entityProfile';
import EntitySummary from './entitySummary';
import EntitySummary2 from './entitySummary2';
import EntityServices from './entityServices';
import EntitySupport from './entitySupport';
import EntityContact from './entityContact';
import './entityCommonView.css';
import CreateUser from './createUser';

class EntityCommonView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedView: ''
    };
    this.handleSummaryButton = this.handleSummaryButton.bind(this);
    this.handleSummary2Button = this.handleSummary2Button.bind(this);
    this.handleProfileButton = this.handleProfileButton.bind(this);
    this.handleSupportButton = this.handleSupportButton.bind(this);
    this.handleServicesButton = this.handleServicesButton.bind(this);
    this.handleContactButton = this.handleContactButton.bind(this);
  }

  handleSummaryButton() {
    this.setState({
      selectedView: <EntitySummary />
    });
  }
  handleSummary2Button() {
    this.setState({
      selectedView: <EntitySummary2 />
    });
  }
  handleProfileButton() {
    this.setState({
      selectedView: <EntityProfile />
    });
  }
  handleSupportButton() {
    this.setState({
      selectedView: <EntitySupport />
    });
  }
  handleServicesButton() {
    this.setState({
      selectedView: <EntityServices />
    });
  }
  handleContactButton() {
    this.setState({
      selectedView: <EntityContact />
    });
  }

  render() {
    var view = this.state.selectedView;

    const sidebarButtons = (
      <div>
        <ul className="SidebarButtons">
          <li>
            <button onClick={this.handleSummaryButton}>Summary</button>
          </li>
          <br />
          <li>
            <button onClick={this.handleSummary2Button}>Summary2</button>
          </li>
          <br />
          <li>
            <button onClick={this.handleProfileButton}>Profile</button>
          </li>
          <br />
          <li>
            <button onClick={this.handleSupportButton}>
              Biz/Co-op Support
            </button>
          </li>
          <br />
          <li>
            <button onClick={this.handleServicesButton}>Services</button>
          </li>
          <br />
          <li>
            <button onClick={this.handleContactButton}>Contact</button>
          </li>
          <br />
        </ul>
      </div>
    );

    return (
      <div className="body">
        <table>
          <tr>
            <td className="header">
              <CreateUser />
              create entity here
            </td>
          </tr>
        </table>
        <table className="info-columns">
          <tr>
            <td className="column1">
              <p> Side Menu </p>
              {sidebarButtons}
            </td>

            <td className="column3">
              <p> Info </p>
              {view}
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td className="footer" />
          </tr>
        </table>
      </div>
    );
  }
}

export default EntityCommonView;
