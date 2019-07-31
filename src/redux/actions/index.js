import { UPLOAD_FILE, ADD_CATEGORY, REMOVE_CATEGORY } from './../containers/action-types'

//register

// const register = (userName, password, comfirmedPassword) => ({
//   type: REGISTER,
//   userName: userName,
//   password: password,
//   comfirmedPassword: comfirmedPassword
// });

//login

// const login = (userName, password) => ({
//   type: LOG_IN,
//   userName: userName,
//   password: password
// });

//upload

const uploadFile = (file, filePath) => ({
  type: UPLOAD_FILE,
  filePath: filePath,
  file: file
});

//add categories

const addCategory = category => ({
  type: ADD_CATEGORY,
  category: category,
});

const removeCategory = category => ({
  type: REMOVE_CATEGORY,
  category: category
});

const addArticle = article => { return {type: 'ADD_RTICLE', payload: {title: article.title, addingDate: article.addingDate}}}

export {
  uploadFile,
  addCategory,
  removeCategory,
  addArticle
} 