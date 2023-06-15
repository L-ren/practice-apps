import React from 'react';

const AddWord = ({onAddEntry, onDescriptionEntry, onAddSubmit}) => {
  return (
    <form onSubmit={onAddSubmit}>
      <h3>Add a New Word!</h3>
      <input type='text' placeholder='New word' onChange={onAddEntry}></input>
      <input type='text' placeholder='Definition' onChange={onDescriptionEntry}></input>
      <input type='submit'></input>
    </form>
  );
};

export default AddWord;