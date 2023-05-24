import { combineReducers } from "redux";
import { propertyReducer } from "./reducers/property.reducer";

const rootReducer = combineReducers({
  property: propertyReducer,
});

export default rootReducer;
