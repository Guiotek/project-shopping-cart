const retur = {
  error: 'resource not found',
};

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui 
  const a = event.target;
  localStorage.removeItem('cartItems');
  return a.parentNode.removeChild(a);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const getItems = async (a) => {
  const items = await fetchProducts(a);
  const append = document.querySelector('.items');
  items.forEach((item) => {
    const { id: sku, title: name, thumbnail: image } = item; 
    const product = createProductItemElement({ sku, name, image });
    append.appendChild(product);
  });
};

const getCartItem = async (a) => {
  const item = await fetchItem(a);
  const { id: sku, title: name, price: salePrice } = item;
  const append = document.querySelector('.cart__items');
  const product = createCartItemElement({ sku, name, salePrice });
  append.appendChild(product);
};

const click = async () => {
  const btn = await document.querySelectorAll('.item__add');
  btn.forEach((element) => {
    element.addEventListener('click', async (event) => {
    const a = await event.target.parentNode;
    const b = await getSkuFromProductItem(a);
    await getCartItem(b);
    saveCartItems(b);
  });
  });
};

const cleanCart = async () => {
const btn = await document.querySelector('.empty-cart');
btn.addEventListener('click', async () => {
  const element = document.querySelectorAll('.cart__item');
  localStorage.clear();
  element.forEach((e) => {
    e.remove();
  });
});
};

const storage = async () => {
  const a = await getSavedCartItems();
  if (a.error === retur.error) {
    return;
  }
  await getCartItem(await a);
};

window.onload = async () => {
  await getItems('computador');
  await click();
  await cleanCart();
  await storage();
};