import { combineReducers } from "redux";
import controlResult from "Redux/Reducers/controlResult";
import getResult from "Redux/Reducers/getResult";

const rootReducer = combineReducers({
  controlResult,
  getResult
});

export default rootReducer;
