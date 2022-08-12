const fetchItem = (value) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/items/${value}`;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
