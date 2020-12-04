import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

let action;
  const kegData = {
    name: 'Starstruck',
    quantity: 124,
    status: "In stock",
    brand: 'Breakside Brewery',
    price: '$5.00',
    style: 'India Pale Ale',
    id: 1
  };

  const currentState = {
    1: {name: 'Giuseppe Warlock Double IPA',
    quantity: 124,
    status: "In stock",
    brand: 'Breakside Brewery',
    price: '$5.00',
    style: 'Double India Pale Ale',
    id: 1 },
    2: {name: 'Salted Carmel Stout',
    quantity: 124,
    status: "In stock",
    brand: 'Breakside Brewery',
    price: '$6.00',
    style: 'Stout',
    id: 2 }
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null})).toEqual({});
  });

  test('Should successfully add new keg data to the masterKegList', () => {
    const { name, quantity, status, brand, price, style, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      quantity: quantity,
      status: status,
      brand: brand,
      price: price,
      style: style,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        quantity: quantity,
        status: status,
        brand: brand,
        price: price,
        style: style,
        id: id
      }
    });
  });

  test('Should successfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {name: 'Salted Carmel Stout',
      quantity: 124,
      status: "In stock",
      brand: 'Breakside Brewery',
      price: '$6.00',
      style: 'Stout',
      id: 2 }
    });
  });
});