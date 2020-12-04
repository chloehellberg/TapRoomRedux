import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, quantity, status, brand, price, style, id } = action;
  switch(action.type) {
    case c.ADD_KEG:
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
    case c.DELETE_KEG:
      const newState = { ...state };
      delete newState[id];
      return newState; 
    default:
      return state;
  };
};