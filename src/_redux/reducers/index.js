import { combineReducers } from "redux";
import * as reducers from "./allReducers";

export const rootReducer = combineReducers({
  NGRandomNumber: reducers.NGRandomNumber
});
