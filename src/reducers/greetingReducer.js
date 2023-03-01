const greetingReducer = (state = '', action) => {
  switch (action.type) {
    case 'FETCH_GREETING':
      return action.payload.greeting;
    default:
      return state;
  }
};
  
export default greetingReducer;