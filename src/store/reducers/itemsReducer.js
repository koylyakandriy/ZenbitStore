import {
  GET_ITEMS,
  GET_ITEM,
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
} from "../actions/Types";

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, items: action.payload };

    case GET_ITEM:
      return { ...state, item: action.payload };

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case ADD_ITEM:
      console.log("dsad:", action);
    return { ...state, item: [action.payload, ...state.item] };

    // case UPDATE_ITEM:
    //   return {
    //     ...state,
    //     items: state.items.map((item) =>
    //       item.id === action.payload.id ? (item = action.payload) : item
    //     ),
    //   };

    default:
      return state;
  }
}
