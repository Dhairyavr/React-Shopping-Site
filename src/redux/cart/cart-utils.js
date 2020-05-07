export const additemtocart = (cartitems,cartitemtoadd) => {
  const existingcartitem= cartitems.find(
    cartitem => cartitem.id===cartitemtoadd.id);

  if(existingcartitem){
    return cartitems.map(
      cartitem => cartitem.id===cartitemtoadd.id ?
      {...cartitem,quantity:cartitem.quantity+1}
      : cartitem)
  }
  return [...cartitems,{...cartitemtoadd,quantity:1}];
}


export const removeanitem = (cartitems,cartitemtoremove) => {

  const existingcartitem=cartitems.find( cartitem => cartitem.id=== cartitemtoremove.id);

  if(existingcartitem.quantity===1){
    return cartitems.filter(cartitem => cartitem.id !==cartitemtoremove.id );
  }
  return cartitems.map( cartitem => cartitem.id ===cartitemtoremove.id ?
    {...cartitem,quantity:cartitem.quantity-1}
    :
  cartitem) ;

}
