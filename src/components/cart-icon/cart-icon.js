import React from 'react';
import './cart-icon.scss';
import {ReactComponent as Shoppingicon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {togglecarthidden} from '../../redux/cart/cart-action';

const Cartitem = ({togglecarthidden,itemcount}) => {
  return(
  <div className='cart-icon' onClick={togglecarthidden}>
    <Shoppingicon className='shopping-icon' />
      <span className='item-count'>{itemcount}</span>
  </div>
);
}
const mapDispatchToProps = (dispatch) => ({
  togglecarthidden:()=>dispatch(togglecarthidden())
})

const mapStateToProps = (state) => ({
  itemcount : state.cart.cartitems.reduce((finalquantity,cartitem)=> finalquantity+cartitem.quantity,0)
})

export default connect(mapStateToProps,mapDispatchToProps)(Cartitem);
