export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addKeg = (keg) => {
  const { name, brand, price, style, id } = keg;
  return {
  type: 'ADD_KEG',
  name: name,
  brand: brand,
  price: price,
  style: style,
  id: id
  };
};