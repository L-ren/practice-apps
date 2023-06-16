import React from 'react';

const Checkout = ({onCheckout}) => {

  return (
    <div>
      <h3>ready to checkout?</h3>
      <form onClick={onCheckout}>
        <button>checkout</button>
      </form>
    </div>
  );
}

export default Checkout;