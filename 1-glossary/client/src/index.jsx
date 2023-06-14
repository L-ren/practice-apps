import React from "react";
import { render } from "react-dom";
import WordList from './components/WordList.jsx';
import Search from './components/Search.jsx';
import AddWord from './components/AddWord.jsx';

// create App component
const App = () => {

  return (<div>
    <h1>GLOSSARY</h1>
    <Search />
    <AddWord />
    <WordList />
  </div>)
};

render(<App /> , document.getElementById("root"));
