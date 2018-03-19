import React, { Component } from 'react';

import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import CreateNewEntity from './createNewEntity';
import ShowAllEntities from './showAllEntities';

const ENTITY_NAME_KEY = 'ENTITY_NAME';
const ENTITY_ID_KEY = 'ENTITY_ID';

class CreateEntity extends Component {
  state = {
    entityName: ''
  };

  async componentWillMount() {
    let name = localStorage.getItem(ENTITY_NAME_KEY);
    if (!name) {
      name = this.state.entityName;
      const result = await this.props.createEntityMutation({
        variables: { name }
      });
      //const personData = { name, id: 'asd'}
      localStorage.setItem(
        ENTITY_NAME_KEY,
        result.data.createEntity.entityName
      );
      localStorage.setItem(ENTITY_ID_KEY, result.data.createEntity.id);
      this.forceUpdate();
    }
  }

  render() {
    const name = localStorage.getItem(ENTITY_NAME_KEY);
    const entityId = localStorage.getItem(ENTITY_ID_KEY);
    return (
      <div className="CreateEntity">
        Create New
        <CreateNewEntity
          name={name}
          id={entityId}
          onTextInput={name => this.setState({ entityName: name })}
          onResetText={this._resetText}
          onSend={this._onSend}
        />
        Show All
        <ShowAllEntities
          names={this.props.allEntitiesQuery.allEntities || []}
          endRef={this._endRef}
        />
      </div>
    );
  }

  _onSend = () => {
    console.log(`Send: ${this.state.entityName}`);
    this.props.createEntityMutation({
      variables: {
        entityName: this.state.entityName
      }
    });
  };

  _resetText = () => {
    this.setState({ entityName: '' });
  };

  _endRef = element => {
    this.endRef = element;
  };
}

const ALL_ENTITIES_QUERY = gql`
  query AllEntitiesQuery {
    allEntities(last: 100) {
      id
      entityName
    }
  }
`;

const CREATE_ENTITY_MUTATION = gql`
  mutation CreateEntityMutation($entityName: String!) {
    createEntity(entityName: $entityName) {
      id
      entityName
    }
  }
`;

export default compose(
  graphql(ALL_ENTITIES_QUERY, { name: 'allEntitiesQuery' }),
  graphql(CREATE_ENTITY_MUTATION, { name: 'createEntityMutation' })
)(CreateEntity);
