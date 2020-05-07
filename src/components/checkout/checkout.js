import React from 'react';
import './checkout.scss';
import {connect} from 'react-redux';
import Checkoutitem from './../checkout-item/checkout-item.js';
import Stripebutton from './../stripe-button/stripe';


const Checkoutpage = ({cartitems,total}) => {
  return(
    <div className='checkout-page'>

      <div className='checkout-header'>
          <div className='header-block'>
            <span > Product</span>
          </div>
          <div className='header-block'>
            <span > Description</span>
          </div>
          <div className='header-block'>
            <span > Quantity</span>
          </div>
          <div className='header-block'>
            <span  >price </span>
          </div>
          <div className='header-block'>
            <span  >Remove </span>
          </div>
      </div>
      {
        cartitems.map((cartitem) => <Checkoutitem  key={cartitem.id} cartitem={cartitem} total={total} />)
      }
      <div className='total'>TOTAL ${total}</div>

      <p>Use following credit card details<br/ > 4242 4242 4242 4242 -exp:1/20 cvv-123</p>
      <Stripebutton price={total} />
    </div>
);
}

const mapStateToProps = (state) => ({
  cartitems:state.cart.cartitems,
  total : state.cart.cartitems.reduce((finalquantity,cartitem)=>finalquantity+cartitem.quantity*cartitem.price,0)
})

export default connect(mapStateToProps,)(Checkoutpage);
