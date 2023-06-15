import React from 'react';

const WordEntry = ({word, definition, onEdit, onDelete}) => {
  return (<div>
    <span>{word}:  {definition}</span>
    <input type='button' value='edit' className={word} onClick={onEdit}></input>
    <input type='button' value='delete' className={word} onClick={onDelete}></input>
    </div>);
};

export default WordEntry;