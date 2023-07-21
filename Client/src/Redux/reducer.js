import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actions";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case REMOVE_FAVORITE:
      return { ...state, myFavorites: action.payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
