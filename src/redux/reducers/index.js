import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import formReducer from "./formReducer";
import notesReducer from "./notesReducer";

export default combineReducers({
    modal: modalReducer,
    form: formReducer,
    notes : notesReducer
})