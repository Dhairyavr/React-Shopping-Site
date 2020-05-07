import React from 'react';
import './collection.styles.scss';
import Button from '../button/button';
import {connect} from 'react-redux';
import {additem} from '../../redux/cart/cart-action';

const Collections = ({item,additem}) =>{
  const {price,name,imageUrl}=item;
  return(
        <div className='collection-item'>
        <div className='image' style={{
          backgroundImage:`url(${imageUrl})`
        }} />
            <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
            </div>

      <Button inverted onClick={()=>additem(item)}>Add to Cart</Button>

        </div>
  );
}

const mapDispatchToProps = dispatch => ({
  additem:item => dispatch(additem(item))
})

export default connect(null,mapDispatchToProps)(Collections);
