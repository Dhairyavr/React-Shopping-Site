import SHOP_DATA from './shop-data';

const initial_state = {
  collections: SHOP_DATA
}

const shopreducer = (state=initial_state,action) => {
  switch (action.type) {

    default:
      return state;
  }
}

export default shopreducer;
