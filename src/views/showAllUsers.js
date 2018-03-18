import React, { Component } from 'react';
import ShowEachUser from './showEachUser';

class ShowAllUsers extends Component {
  render() {
    return (
      <div className="ShowAllUsers">
        {this.props.names.map((name, i) => {
          return <ShowEachUser key={i} name={name} />;
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

export default ShowAllUsers;

ShowAllUsers.propTypes = {};
