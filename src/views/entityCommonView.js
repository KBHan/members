import React, { Component } from 'react';
import Sidebar from './sidebar';
import EntityProfile from './entityProfile';
import EntitySummary from './entitySummary';
import EntitySummary2 from './entitySummary2';
import EntityServices from './entityServices';
import EntitySupport from './entitySupport';
import EntityContact from './entityContact';
import './entityCommonView.css';

class EntityCommonView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: 'summary'
    };

    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(menuSelection) {
    console.log('handleSelection');
    this.setState({
      selection: menuSelection
    });
  }

  render() {
    var profile = <EntityProfile />;
    var summary = <EntitySummary />;
    var summary2 = <EntitySummary2 />;
    var services = <EntityServices />;
    var support = <EntitySupport />;
    var contact = <EntityContact />;

    var view;

    switch (this.state.selection) {
      case 'summary':
        view = summary;
        break;
      case 'summary2':
        view = summary2;
        break;
      case 'profile':
        view = profile;
        break;
      case 'services':
        view = services;
        break;
      case 'support':
        view = support;
        break;
      case 'contact':
        view = contact;
        break;
      default:
        break;
    }

    return (
      <div className="body">
        <table>
          <tr>
            <td className="header" />
          </tr>
        </table>
        <table className="info-columns">
          <tr>
            <td className="column1">
              <p> Side Menu </p>
              <Sidebar onSelect={this.handleSelection} />
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
