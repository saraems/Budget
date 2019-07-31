import { ADD_CATEGORY, REMOVE_CATEGORY } from '../containers/action-types'


const upload = (state, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return state.expenses.categories = [...state.expenses.categories, action.category]
    case REMOVE_CATEGORY:
      return state.expenses.categories.filter(category => category !== action.category);

    default:
      return state;
  }
};

export default upload;
