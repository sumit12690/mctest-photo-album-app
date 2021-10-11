import React, { Component } from 'react';
import { connect } from 'react-redux';
import { users } from '../../data/users';
import { addUserToFilter, removeUserFromFilter } from '../../actions';

const UserFilter = (props) => {
  const { dispatch } = props;
  const handleSelectBox = (e) => {
    const name = e.target.name;
    const value = e.target.checked;

    if (e.target.checked) {
      dispatch(addUserToFilter(name));
    } else {
      dispatch(removeUserFromFilter(name));
    }
  };

  return (
    <aside className="sidebar">
      <h3>Filter Albums</h3>
      {users.map((user) => (
        <label className="checkbox">
          {user}
          <input
            type="checkbox"
            name={user}
            className="checkbox"
            onInput={handleSelectBox}
          />
          <span className="custom-checkbox__span"></span>
        </label>
      ))}
    </aside>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(UserFilter);
