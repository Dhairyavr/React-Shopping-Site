import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userreducer from './user/user-reducer';
import cartreducer from './cart/cart-reducer';
import directoryreducer from './directory/directory-reducer';
import shopreducer from './shop/shop-reducer';


const persistconfig = {
  key:'root',
  storage,
  whitelist:['cart']
}

const rootreducer= combineReducers ({
  user:userreducer,
  cart:cartreducer,
  directory:directoryreducer,
  shop:shopreducer
})

export default persistReducer(persistconfig,rootreducer)
