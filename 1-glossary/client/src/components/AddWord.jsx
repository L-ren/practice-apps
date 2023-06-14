import React from 'react';

const AddWord = () => {
  return (
    <div>
      <h3>Add a New Word!</h3>
      <input type='text' placeholder='New word'></input>
      <input type='text' placeholder='Definition'></input>
      <input type='submit'></input>
    </div>
  );
};

export default AddWord;