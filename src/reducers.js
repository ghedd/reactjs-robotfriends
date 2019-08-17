import { CHANGE_SEARCH_FIELD } from "./constants.action";

const initialState = {
  searchField: ""
};
export const searchRobots = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      /*  
    NOTE standard syntax
    return Object.assign({}, state, {searchField:action.payload });
   */
      // NOTE clearner code
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};
