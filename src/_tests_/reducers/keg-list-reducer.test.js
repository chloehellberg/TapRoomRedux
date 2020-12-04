import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

let action;
  const kegData = {
    name: 'Starstruck',
    brand: 'Breakside Brewery',
    price: '$5.00',
    style: 'India Pale Ale',
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null})).toEqual({});
  });

  test('Should successfully add new keg data to the masterKegList', () => {
    const { name, brand, price, style, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      style: style,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        style: style,
        id: id
      }
    });
  });
});