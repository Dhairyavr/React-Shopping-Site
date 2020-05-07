import React from 'react';
import './checkout-item.scss';
import {clearitemfromcart,additem,removeitem} from './../../redux/cart/cart-action';
import {connect} from 'react-redux';

const Checkoutitem = ({cartitem,clearitem,increquantity,decrquantity}) => (

  <div className='checkout-item'>
    <div className='image-container'>
      <img src={cartitem.imageUrl} alt='' />
    </div>
    <span className='name'>{cartitem.name} </span>
    <span className='quantity'>
      <div className='arrow' onClick={() => increquantity(cartitem) }> &#10094; </div>

       <span className='value'>{cartitem.quantity}</span>

       <div className='arrow' onClick={() => decrquantity(cartitem) }> &#10095; </div>
    </span>
    <span className='price'>{cartitem.price} </span>
    <span className='remove-button' onClick={() => clearitem(cartitem)}>&#10005;</span>


</div>

);

const mapDispatchToProps = dispatch => ({
  clearitem: item => dispatch(clearitemfromcart(item)),
  increquantity: item => dispatch(additem(item)),
  decrquantity : item => dispatch(removeitem(item))
})
export default connect(null,mapDispatchToProps)(Checkoutitem);
