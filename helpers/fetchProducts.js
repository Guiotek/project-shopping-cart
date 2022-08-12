const fetchProducts = async (value) => {
  // seu código aqui
const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${value}`);
const data = await request.json();
const { results } = data;
return results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
