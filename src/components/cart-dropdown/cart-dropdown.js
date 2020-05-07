import React from 'react';
import Button from '../button/button';
import './cart-dropdown.scss';
import Cartitem from '../cart-item/cart-item';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {togglecarthidden} from '../../redux/cart/cart-action';

const Cartdropdown = ({cartitems,history,dispatch}) => {
  return (
    <div className='cart-dropdown'>
        <div className='cart-items' >
        {
          cartitems.length ?
          (cartitems.map(cartitem => (<Cartitem key={cartitem.id} item={cartitem} />)))
          :
          (<span className='empty-message'> Your cart is empty</span>)
        }
      </div>
          <Button onClick={()=>{
               history.push(`/checkout`);
               dispatch(togglecarthidden());
             }}>
             Go To Checkout</Button>

    </div>
  );
}

const mapStateToProps = (state) => ({
  cartitems:state.cart.cartitems
})

export default withRouter(connect(mapStateToProps)(Cartdropdown));
