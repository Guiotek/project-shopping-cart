require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui]
  test('testa se é uma função', () => {
      expect(typeof fetchProducts).toEqual('function')
  })
  test('se recebendo parametros certos retorna o valor esperado', () => {
      expect(fetchProducts('computador')).toEqual(computadorSearch)
    {
      expect(fetchProducts()).toThrow(new Error('You must provide an url'))
    }
  })  
  test('se o fetch é chamado, e com os parametros certos', async () =>{
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
