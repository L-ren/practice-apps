import React from 'react';

const AddressForm = ({onAddressFormNext, addressForm}) => {
  return (
    <div>
      <h3>enter shipping and contact details</h3>
      <form onSubmit={onAddressFormNext}>
        <input type='text' placeholder='line 1' required></input>
        <input type='text' placeholder='line 2'></input>
        <input type='text' placeholder='city' required></input>
        <input type='text' placeholder='state' required></input>
        <input type='text' placeholder='zip code' required></input>
        <input type='tel' placeholder='phone number' required></input>
        <input type='submit' value='next' required></input>
      </form>
    </div>
  );
};

export default AddressForm;