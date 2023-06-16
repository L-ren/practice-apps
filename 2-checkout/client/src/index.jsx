import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import axios from 'axios';

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
  const [orderPlaced, setOrderPlaced] = useState(false);

  const onCheckout = (e) => {
    e.preventDefault();
    setHomepage(false);
    setUserForm(true);
  };
  const onUserFormNext = (e) => {
    e.preventDefault();
    let userDetails = {
      fullName: `${e.target.children[0].value} ${e.target.children[1].value}`,
      email: e.target.children[2].value,
      password: e.target.children[3].value
    }
    setUserForm(false);
    setAddressForm(true);
    axios.post('/api', userDetails)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err);
      })
  };
  const onAddressFormNext = (e) => {
    e.preventDefault();
    let addressDetails = {
      addressLine1: e.target.children[0].value,
      addressLine2: e.target.children[1].value,
      city: e.target.children[2].value,
      state: e.target.children[3].value,
      zip: e.target.children[4].value,
      phone: e.target.children[5].value
    };
    axios.post('/api', addressDetails)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err);
      })
    setAddressForm(false);
    setPaymentForm(true);
  };
  const onPaymentFormNext = (e) => {
    e.preventDefault();
    let paymentDetails = {
      creditCard: e.target.children[0].value,
      expiration: e.target.children[1].value,
      CVV: e.target.children[2].value,
      zip: e.target.children[3].value
    };
    axios.post('/api', paymentDetails)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err);
      })
    setPaymentForm(false);
    setConfirmation(true);
  };
  const onConfirmationNext = (e) => {
    e.preventDefault;
    axios.get('/api')
      .then((response => {
        console.log(response);
      }))
      .catch((err) => {
        console.log(err);
      });
    setConfirmation(false);
    setHomepage(true);
    setOrderPlaced(true);
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
    {orderPlaced && <span> your order has been placed!</span> }
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
