import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('tap room actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addKeg should create ADD_TICKET action', () => {
    expect(actions.addKeg({name: 'Tasty Beer', quantity: 124, status: "Keg is Full", brand: 'Deschutes', price: '$5.00', style: 'IPA', id: 1})).toEqual({
      type: c.ADD_KEG,
      name: 'Tasty Beer',
      quantity: 124,
      status: "Keg is Full",
      brand: 'Deschutes',
      price: '$5.00',
      style: 'IPA',
      id: 1
    });
  });

  it('selectedKeg should create SELECTED_KEG action', () => {
    expect(actions.selectedKeg(1)).toEqual({
      type: c.SELECTED_KEG,
      id: 1
    });
  });
});