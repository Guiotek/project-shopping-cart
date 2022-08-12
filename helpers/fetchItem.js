const fetchItem = async (product) => {
  // seu código aqui
  const item = `https://api.mercadolibre.com/items/${product}`;
  const request = await fetch(item);
  const data = await request.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
