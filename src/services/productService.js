
// archivo js que devuelve productos importados desde la data
export const getProducts = async() => {

  // comunicacion con el backend
  const response = await fetch('http://localhost:8080/products');
  const products = response.json();

  return products;
};

export const calculateTotal = (items) => {
  return items.reduce(
    (accumulator, item) => accumulator + item.product.price * item.quantity,
    0
  );
};
