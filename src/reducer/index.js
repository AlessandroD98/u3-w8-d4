const initialState = {
  pref: {
    content: [],
  },
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAV":
      return {
        ...state,
        pref: {
          ...state.pref,
          content: [...state.pref.content, action.payload],
        },
      };
    case "REMOVE_FROM_FAV":
      return {
        ...state,
        pref: {
          ...state.pref,
          content: state.pref.content.filter((_, i) => i !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default Reducer;
