import { createStore } from "redux";
import rootReducer from "../reducers/index";
import { addArticle, addCategory, removeCategory  } from '../actions/index'


const store = createStore(rootReducer);

//add store to console
window.store = store;
window.addArticle = addArticle;
window.addCategory = addCategory;
window.removeCategory = removeCategory;

export default store;