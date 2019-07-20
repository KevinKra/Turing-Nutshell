import { combineReducers } from "redux";
import * as reducers from "./allReducers";

export const rootReducer = combineReducers({
  NGNumbers: reducers.NGNumbers,
  NGChallengerData: reducers.NGChallengerData,
  NGRoundData: reducers.NGRoundData
});
