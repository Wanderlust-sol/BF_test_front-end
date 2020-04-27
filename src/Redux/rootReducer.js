import { combineReducers } from "redux";
import controlResult from "Redux/Reducers/controlResult";
import getResult from "Redux/Reducers/getResult";
import controlQuestion from "Redux/Reducers/controlQuestion";

const rootReducer = combineReducers({
  controlResult,
  getResult,
  controlQuestion,
});

export default rootReducer;
