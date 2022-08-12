const fetchProducts = async (value) => {
  // seu código aqui
const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${value}`);
const data = await request.json();
return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
