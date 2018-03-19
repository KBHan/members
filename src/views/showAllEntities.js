import React, { Component } from 'react';
import ShowEachEntity from './showEachEntity';

class ShowAllEntities extends Component {
  render() {
    return (
      <div className="ShowAllEntities">
        {this.props.names.map((name, i) => {
          return <ShowEachEntity key={i} name={name} />;
        })}
        <div
          style={{ float: 'left', clear: 'both' }}
          ref={el => {
            this.props.endRef(el);
          }}
        />
      </div>
    );
  }
}

export default ShowAllEntities;

ShowAllEntities.propTypes = {};
