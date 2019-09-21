import { ADD_CATEGORY } from './../containers/action-types'

const addNewCategory = (newCategory) => {
  return {type: ADD_CATEGORY, payload: newCategory}
}

export {
  addNewCategory
}
