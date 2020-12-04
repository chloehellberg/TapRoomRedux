import * as c from './../actions/ActionTypes';

export default ( state = '', action ) => {
  switch(action.type) {
    case c.SELECTED_KEG:
      return state = action.id;
    default:
      return state;
  };
};