import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootreducer from './root-reducer';
import {persistStore} from 'redux-persist';

const middleware=[logger];
const store = createStore(rootreducer,applyMiddleware(...middleware));
const persistor=persistStore(store);

export {store,persistor};
