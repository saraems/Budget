import { createStore } from "redux";
import rootReducer from "../reducers/index";
import { addArticle } from '../actions/index'


const store = createStore(rootReducer);

//add store to console
window.store = store;
window.addArticle = addArticle;

export default store;