import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as c from './../../actions/ActionTypes';

describe("selectedKegReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(selectedKegReducer(false, { type: null })).toEqual(false);
  });

  test('Should change selected Keg state to true', () => {
    expect(selectedKegReducer(null, { type: c.SELECTED_KEG})).toEqual(true);
  });
});