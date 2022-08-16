const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  test('se o metodo foi chamado', async () =>{
    const a = '<ol><li>Item</li></ol>'
    {
      await saveCartItems(a)

      expect(localStorage.setItem).toHaveBeenCalled()
    }
    {
      await saveCartItems(a)

      expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', a)
    }
  });
  test('se o metodo foi chamado', async () =>{
    const a = '<ol><li>Item</li></ol>'
    const b = []
    {
      await saveCartItems(a, b)

      expect(localStorage.setItem).toHaveBeenCalled()
    }
    {
      await saveCartItems(a, b)

      expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', a)
    }
  });
});
