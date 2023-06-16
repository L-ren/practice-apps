import React from 'react';

const UserForm = ({onUserFormNext}) => {
  return (
    <div>
      <h3>enter personal details</h3>
      <form onSubmit={onUserFormNext}>
        <input type='text' placeholder='first name' required></input>
        <input type='text' placeholder='last name' required></input>
        <input type='email' placeholder='email' required></input>
        <input type='password' placeholder='password' required></input>
        <input type='submit' value='next'></input>
      </form>
    </div>
  );
};

export default UserForm;