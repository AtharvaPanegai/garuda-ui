import { combineReducers } from "redux";
import userReducer from "../slices/userSlice"
import projectReducer from "../slices/projectSlice"

const rootReducer = combineReducers({
    user : userReducer,
    project : projectReducer
})


export default rootReducer;