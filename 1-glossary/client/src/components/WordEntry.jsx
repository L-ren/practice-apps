import React from 'react';

const WordEntry = ({word, definition}) => {
  return (<div>{word}:  {definition}</div>);
};

export default WordEntry;