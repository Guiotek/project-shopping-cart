require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  test('erro', async () => {
    await expect(fetchProducts()).rejects.toThrow('You must provide an url');
  })
  test('testa se é uma função', () => {
        expect(typeof fetchProducts).toBe('function')
  })
  test('se o fetch é chamado, e com os parametros certos', async () => {
    const api = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    {
      await fetchProducts('computador')

      expect(fetch).toHaveBeenCalled()
    }
    {
      await fetchProducts('computador')         

      expect(fetch).toHaveBeenCalledWith(api)
    }
  })
});
