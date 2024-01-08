import {combineReducers} from "redux";
import campReducer from "./campReducer";

export default combineReducers({
    camps:campReducer
})