import * as c from './ActionTypes';

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addKeg = (keg) => {
  const { name, quantity, status, brand, price, style, id } = keg;
  return {
  type: c.ADD_KEG,
  name: name,
  quantity: quantity,
  status: status,
  brand: brand,
  price: price,
  style: style,
  id: id
  };
};