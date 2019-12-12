import { combineReducers } from "redux";
import todos from "./TodoReducer";
import visibilityFilter from "./FilterReducer";

export default combineReducers({
  todos,
  visibilityFilter
});

//Combining all the reducers declared,
// into one combineReducers() method imported from,
// the Redux library and exporting them for business logic.
