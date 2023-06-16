import React from 'react';

const Confirmation = ({onConfirmationNext}) => {

  return (
    <div>
      <h3>Confirm details</h3>
      <p>render details here</p>
      <form onSubmit={onConfirmationNext}>
        <input type='submit' value='place order'></input>
      </form>
    </div>
  )
};

export default Confirmation;