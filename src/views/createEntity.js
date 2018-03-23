import React from 'react';

import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import CreateNewEntity from './createNewEntity';
import ShowAllEntities from './showAllEntities';

/* async componentWillMount() {
    let name 
    if (!name) {
      let result;
      name = this.state.entityName;
      try {
        result = await this.props.createEntityMutation({
                        variables: { entityName: name }
                      });
        localStorage.setItem(
          ENTITY_NAME_KEY,
          result.data.createEntity.entityName
        );
        console.log(result.data.createEntity.entityName);
        localStorage.setItem(ENTITY_ID_KEY, result.data.createEntity.id);
     } catch (e) {
        console.log(e)
      }
      
    }
  } */

const CreateEntity = ({ entityName, allEntitiesQuery, refetch, onCreate }) => {
  console.log(typeof onCreate);
  return (
    <div className="CreateEntity">
      Create New
      <CreateNewEntity onCreate={onCreate} />
      <div>{entityName}</div>
      Show All
      <ShowAllEntities names={allEntitiesQuery.allEntities || []} />
    </div>
  );
};

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
  graphql(CREATE_ENTITY_MUTATION, {
    props: ({ mutate }) => ({
      onCreate: entityName => mutate({ variables: { entityName } })
    }),
    options: { refetchQueries: ['allEntities'] }
  })
)(CreateEntity);
