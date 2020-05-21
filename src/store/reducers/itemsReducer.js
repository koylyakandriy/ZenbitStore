import {
  GET_ITEMS,
  ADD_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  REMOVE_ITEM,
} from "../actions/Types";

const initialState = {
  items: [],
  cartList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, items: action.payload };

    case ADD_ITEM: {
      let tempCart = [...state.cartList];
      const tempProducts = [...state.items];
      let tempItem = tempCart.find(({ id }) => id === action.payload.id);
      if (!tempItem) {
        tempItem = tempProducts.find(({ id }) => id === action.payload.id);
        let total = tempItem.price;
        let cartItem = { ...tempItem, count: 1, total };

        tempCart = [...tempCart, cartItem];
      } else {
        tempItem.count++;
        tempItem.total = parseFloat(
          (tempItem.price * tempItem.count).toFixed(2)
        );
      }
      return { ...state, cartList: tempCart };
    }

    case INCREMENT_ITEM: {
      let tempCart = [...state.cartList];
      const cartItem = tempCart.find(({ id }) => id === action.payload);

      cartItem.count++;
      cartItem.total = parseFloat((cartItem.count * cartItem.price).toFixed(2));
      return {
        ...state,
        cartList: [...tempCart],
      };
    }

    case DECREMENT_ITEM: {
      let tempCart = [...state.cartList];
      const cartItem = tempCart.find(({ id }) => id === action.payload);

      cartItem.count--;
      if (cartItem.count === 0) {
        let tempCart = [...state.cartList];
        tempCart = tempCart.filter(({ id }) => id !== action.payload);
        return {
          ...state,
          cartList: [...tempCart],
        };
      } else {
        cartItem.total = parseFloat(
          (cartItem.count * cartItem.price).toFixed(2)
        );
      }
      return {
        ...state,
        cartList: [...tempCart],
      };
    }

    case REMOVE_ITEM: {
      let tempCart = [...state.cartList];
      tempCart = tempCart.filter(({ id }) => id !== action.payload);
      return {
        ...state,
        cartList: [...tempCart],
      };
    }

    default:
      return state;
  }
}
