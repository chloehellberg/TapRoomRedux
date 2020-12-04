export default (state = {}, action) => {
  const { name, quantity, status, brand, price, style, id } = action;
  switch(action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          quantity: quantity,
          status: status,
          brand: brand,
          price: price,
          style: style,
          id: id
        }
      });
    case 'DELETE_KEG':
      const newState = { ...state };
      delete newState[id];
      return newState; 
    default:
      return state;
  };
};