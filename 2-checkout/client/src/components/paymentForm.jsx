import React from 'react';

const PaymentForm = ({onPaymentFormNext}) => {
  return (
    <div>
      <h3>enter payment details</h3>
      <form onSubmit={onPaymentFormNext}>
        <input type='number' placeholder='enter credit card number' required></input>
        <input type='month' placeholder='enter expiration month' required></input>
        <input type='number' placeholder='enter cvv' required></input>
        <input type='number' placeholder='enter zip code' required></input>
        <input type='submit' value='confirm details'></input>
      </form>
    </div>
  );
};

export default PaymentForm;