const fetchProducts = async (value) => {
  // seu código aqui
const url = `https://api.mercadolibre.com/sites/MLB/search?q=${value}`;

const request = await fetch(url);
const data = await request.json();
return data;
};

console.log(fetchProducts('computador'));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
