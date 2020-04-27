import { combineReducers } from "redux";
import controlResult from "Redux/Reducers/controlResult";
import getResult from "Redux/Reducers/getResult";
import controlQuestion from "Redux/Reducers/controlQuestion";
import controlDetail from "Redux/Reducers/controlDetail";
import controlAbout from "Redux/Reducers/controlAbout";

const rootReducer = combineReducers({
  controlResult,
  getResult,
  controlQuestion,
  controlDetail,
  controlAbout,
});

export default rootReducer;
