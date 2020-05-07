import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Stripebutton = ({price}) => {
  const priceforstripe= price*100; //converting into cents
  const publishablekey="pk_test_XlBh5jg6BbprQey1oC7gyhId00bvA1LYcz"

const ontoken = token => {
  console.log(token);
  alert('Payment Successful')
}

  return (
    <StripeCheckout
      label='Pay Now'
      name='Shopping Web App'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your Total price is $${price}`}
      amount={priceforstripe}
      panelLabel='Pay Now'
      token={ontoken}
      stripeKey={publishablekey}
      />
  );
}

export default Stripebutton;
