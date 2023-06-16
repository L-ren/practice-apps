import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { render } from "react-dom";

import Checkout from './components/checkout.jsx';
import UserForm from './components/userForm.jsx';
import AddressForm from './components/addressForm.jsx';
import PaymentForm from './components/paymentForm.jsx';
import Confirmation from './components/confirmation.jsx';

const App = () => {
  const [homepage, setHomepage] = useState(true);
  const [userForm, setUserForm] = useState(false);
  const [addressForm, setAddressForm] = useState(false);
  const [paymentForm, setPaymentForm] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const onCheckout = (e) => {
    e.preventDefault();
    console.log(`checkout clicked!`);
    setHomepage(false);
    setUserForm(true);
  };
  const onUserFormNext = (e) => {
    e.preventDefault();
    console.log(`user form completed!`);
    setUserForm(false);
    setAddressForm(true);
  };
  const onAddressFormNext = (e) => {
    e.preventDefault();
    console.log(`address form completed!`);
    setAddressForm(false);
    setPaymentForm(true);
  };
  const onPaymentFormNext = (e) => {
    e.preventDefault();
    console.log(`payment form completed!`);
    setPaymentForm(false);
    setConfirmation(true);
  };
  const onConfirmationNext = (e) => {
    e.preventDefault;
    console.log(`order successfully placed`);
    setConfirmation(false);
    setHomepage(true);
  };


  return (
    <div>
    <h1>Homepage</h1>
    <p>BUY STUFF</p>
    <p>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </p>
    {homepage  && <Checkout onCheckout={onCheckout}/>}
    {userForm && <UserForm onUserFormNext={onUserFormNext}/>}
    {addressForm && <AddressForm onAddressFormNext={onAddressFormNext}/>}
    {paymentForm && <PaymentForm onPaymentFormNext={onPaymentFormNext}/>}
    {confirmation && <Confirmation onConfirmationNext={onConfirmationNext}/>}
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
