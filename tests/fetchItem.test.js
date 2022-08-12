require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  test('se a é uma função', () =>{
    expect(typeof fetchItem).toBe('function')
  })
  test('test se com o argumento o fetch é chamado e com qual endpoint', async () =>{
    const api = 'https://api.mercadolibre.com/items/MLB1615760527'
    {
      await fetchItem('MLB1615760527');

      expect(fetch).toHaveBeenCalled()
    }
    {
      await fetchProducts('MLB1615760527')         

      expect(fetch).toHaveBeenCalledWith(api)
    }
  })
});
