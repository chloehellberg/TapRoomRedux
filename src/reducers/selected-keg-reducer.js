import * as c from './../actions/ActionTypes';

export default ( state = null, action ) => {
  switch(action.type) {
    case c.SELECTED_KEG:
      return state;
    default:
      return state;
  };
};