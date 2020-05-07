import cartactiontypes from './cart-type';

export const togglecarthidden = () => (
  {
    type:cartactiontypes.TOGGLE_CART_HIDDEN

  }
)

export const additem = (item) => (
  {
    type:cartactiontypes.ADD_ITEM,
    payload:item
  }
)

export const clearitemfromcart = (item) => (
  {
    type:cartactiontypes.CLEAR_ITEM_FROM_CART,
    payload:item
  }
)

export const removeitem = (item) => (
  {
    type:cartactiontypes.REMOVE_ITEM,
    payload:item
  }
)
