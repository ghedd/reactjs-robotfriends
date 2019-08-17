import { combineReducers } from "redux";
import searchRobots from "../Reducers/SearchReducer.reducer";
import requestRobots from "../Reducers/RequestData.reducer";

const rootReducer = combineReducers({ searchRobots, requestRobots });

export default rootReducer;
