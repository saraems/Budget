import store from "./redux/store/index";
import { register, login, upload, addCategory, removeCategory } from "./actions/index";

window.store = store;

window.register = register;
window.login = login;
window.upload = upload;
window.addCategory = addCategory;
window.removeCategory = removeCategory;
