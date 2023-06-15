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

  const onSearchEntry = (e) => {
    setSearchText(e.target.value);
  }
  const onSearchSubmit = (e) => {
    e.preventDefault();
    // get has no request body, so send post request with search term
    axios.post('http://localhost:3000/words/search', {searchText}).then((response) => {
      console.log('render search results')
      // response should contain all words that match search
      // update word list
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
    axios.post('http://localhost:3000/words', {
      addedWord,
      description
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    })
  };

  useEffect(() => {
    // render list of all words when refreshed
    axios.get('http://localhost:3000/words').then((response) => {
      console.log('render all words');
    }).catch((err) => {
      console.log(err);
    })
    // make request to server for 25 words
    // updateword list with those words
  }, []);

  return (<div>
    <h1>GLOSSARY</h1>
    <Search onSearchEntry={onSearchEntry} onSearchSubmit={onSearchSubmit}/>
    <AddWord onAddEntry={onAddEntry} onDescriptionEntry={onDescriptionEntry} onAddSubmit={onAddSubmit}/>
    <WordList />
  </div>)
};

render(<App /> , document.getElementById("root"));
