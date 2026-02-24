export const generateProducts = (count) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    products.push({
      id: i,
      name: `Product ${i + 1}`,
      price: Math.floor(Math.random() * 1000) + 1,
      description: `Description for product ${i + 1}`,
      category: i % 2 === 0 ? 'Electronics' : 'Clothing'
    });
  }
  return products;
};