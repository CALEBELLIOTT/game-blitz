import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { appReducer } from "./app";


const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
})

export { rootReducer }