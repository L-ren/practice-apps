const onSearchEntry = (e) => {
  setSearchText(e.target.value);
}

const onSearchSubmit = (e) => {
  e.preventDefault();
  console.log(`search submitted`)
  // send get request to server with searchText
};

const onAddEntry = (e) => {
  setAddedWord(e.target.value);
};

const onDescriptionEntry = (e) => {
  setDescription(e.target.value);
};

const onAddSubmit = (e) => {
  e.preventDefault();
  console.log(`add submitted`);
};

const eventHandlers = {onSearchEntry, onSearchSubmit, onAddEntry, onDescriptionEntry, onAddSubmit};
export default eventHandlers;