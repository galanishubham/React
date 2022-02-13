export const initialState = {
  basket: [],
  whislist: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };

    case "CLEAR_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "ADD_TO_WHISLIST":
      return {
        ...state,
        whislist: [...state.whislist, action.item],
      };
    case "REMOVE_FROM_WHISLIST":
      return {
        ...state,
        whislist: state.whislist.filter((item) => item.id !== action.id),
      };

    case "CLEAR_WHISLIST":
      return {
        ...state,
        whislist: [],
      };

    default:
      return state;
  }
};

export default reducer;
