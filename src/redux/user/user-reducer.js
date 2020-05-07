const initial_state={
  currentuser:null
}

const userreducer = (state = initial_state,action) => {

  switch (action.type) {
    case 'SET_CURRENT_USER':
    return{
      ...state,
      currentuser:action.payload
    };
    default:
    return state;
  }

}
export default userreducer;
