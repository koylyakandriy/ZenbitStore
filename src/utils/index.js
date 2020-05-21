export const getTotals = (cart) => {
  let total = 0;
  let cartItems = 0;

  cart &&
    cart.forEach((item) => {
      total += parseFloat(item.total.toFixed(2));
      cartItems += item.count;
    });

  return {
    cartItems,
    total,
  };
};
