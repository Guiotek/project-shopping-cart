const saveCartItems = (param, param2) => {
  // seu código aqui
  if (param2 !== undefined) {
param2.push(param);
return localStorage.setItem('cartItems', JSON.stringify(param2));
  }
  return localStorage.setItem('cartItems', param);
};
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
