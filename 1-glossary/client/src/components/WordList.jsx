import React from 'react';
import WordEntry from './WordEntry.jsx'

const WordList = ({ wordList }) => {
  return (<div>
    <h3> Word List! </h3>
    { wordList.map((wordObj) => {
      return (<WordEntry word={wordObj.word} definition={wordObj.definition} key={wordObj.word}/>);
    }) }
    </div>);
};

export default WordList;