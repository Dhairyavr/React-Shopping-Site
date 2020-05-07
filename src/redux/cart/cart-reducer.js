import cartactiontypes from './cart-type';
import {additemtocart,removeanitem}  from './cart-utils';
const initial_state={
  hidden:true,
  cartitems:[]
}

const cartreducer = (state=initial_state,action) => {
  switch (action.type) {
    case cartactiontypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden:!state.hidden
      }

    case cartactiontypes.ADD_ITEM:
    return {
      ...state,
      cartitems:additemtocart(state.cartitems,action.payload)
    };

    case cartactiontypes.CLEAR_ITEM_FROM_CART:
    return {
      ...state,
      cartitems : state.cartitems.filter(cartitem => cartitem.id !== action.payload.id)
    };

    case cartactiontypes.REMOVE_ITEM:
    return{
      ...state,
      cartitems:removeanitem(state.cartitems,action.payload)
    };

    default:
    return state;
  }

}

export default cartreducer;
