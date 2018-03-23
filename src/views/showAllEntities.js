import React from 'react';
import ShowEachEntity from './showEachEntity';

const ShowAllEntities = ({ names }) => (
  <div className="ShowAllEntities">
    {names.map((name, i) => {
      return <ShowEachEntity key={i} name={name.entityName} />;
    })}
  </div>
);

export default ShowAllEntities;

ShowAllEntities.propTypes = {};
