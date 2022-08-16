const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  test('se o metodo foi chamado', async () =>{
    {
      await getSavedCartItems()

      expect(localStorage.getItem).toHaveBeenCalled()
    }
    {
      await getSavedCartItems()

      expect(localStorage.getItem).toHaveBeenCalledWith('cartItems')
    }
  })
});
