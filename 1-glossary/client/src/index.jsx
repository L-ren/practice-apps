import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import WordList from './components/WordList.jsx';
import Search from './components/Search.jsx';
import AddWord from './components/AddWord.jsx';
import axios from 'axios';

// create App component
const App = () => {
  const [searchText, setSearchText] = useState('');
  const [addedWord, setAddedWord] = useState('');
  const [description, setDescription] = useState('');
  const [wordList, setWordList] = useState([]);

  // render list of all words on page load
  useEffect(() => {
    axios.get('/words').then((response) => {
      setWordList(response.data);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  const onSearchEntry = (e) => {
    setSearchText(e.target.value);
  }
  const onSearchSubmit = (e) => {
    e.preventDefault();
    // REWRITE THIS REQUEST AS GET FOLLOW REST
    axios.get('/words/search', {params: {test: 'test'}}).then((response) => {
      setWordList(response.data);
    }).catch((err) => {
      console.log(err)
    });
  };
  const onAddEntry = (e) => {
    setAddedWord(e.target.value);
  };
  const onDescriptionEntry = (e) => {
    setDescription(e.target.value);
  };
  const onAddSubmit = (e) => {
    e.preventDefault();
    // include new word and description
    axios.post('/words', {
      addedWord,
      description
    }).then((response) => {
      // immediately rerender page with added word
      setWordList([...wordList, {word: addedWord, definition: description}]);
    }).catch((err) => {
      if (err.response.data) { alert(err.response.data) };
      console.log(err);
    })
  };
  const onEdit = (e) => {
    let editedWord = e.target.className;
    let definition = prompt('Enter a new definition');
    axios.put('/words', {editedWord, definition})
      .then((response) => {
        setWordList(wordList.map((word) => (word.word === editedWord) ? {word: editedWord, definition} : word));
      }).catch((err) => {
        console.log(err);
      })
  };
  const onDelete = (e) => {
    let deletedWord = e.target.className;
    axios.delete('/words', {data: {deletedWord}})
      .then((response) => {
        setWordList(wordList.filter((word) => (word.word === deletedWord) ? 0 : 1));
      }).catch((err) => {
        console.log(err);
      })
  }

  return (<div>
    <h1>GLOSSARY</h1>
    <Search onSearchEntry={onSearchEntry} onSearchSubmit={onSearchSubmit}/>
    <AddWord onAddEntry={onAddEntry} onDescriptionEntry={onDescriptionEntry} onAddSubmit={onAddSubmit}/>
    <WordList wordList={wordList} onEdit={onEdit} onDelete={onDelete}/>
  </div>)
};

render(<App /> , document.getElementById("root"));
