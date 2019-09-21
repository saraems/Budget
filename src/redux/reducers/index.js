// import { combineReducers } from "redux";
// import categories from "./categories";
// import upload from "./upload";
import { ADD_CATEGORY, REMOVE_CATEGORY } from '../containers/action-types';


// const initialState = {
//   user: {
//     username: '',
//     password: 'ThisIsSecret',
//     expenses: {
//       categories: [
//         "Mieszkanie",
//         "Żywność i środki czystości",
//         "Internet i telefon",
//         "Przejazdy",
//         "Edukacja",
//         "Podróże",
//         "Jedzenie poza domem",
//         "Zdrowie i Uroda",
//         "Ubrania",
//         "Rozrywka",
//         "Prezenty",
//         "Elektronika",
//         "Kary",
//         "Inne"
//       ]
//     },
//     csv: [
//       {
//         date: "02.02.3242",
//         description: "za upojna noc",
//         costs: 9,
//         category: "Zakupy"
//       },
//       {
//         date: "02.02.3242",
//         description: "na waciki",
//         costs: 9,
//         category: "Uroda"
//       }
//     ]
//   }
// };

const initialState = {
  files: [],
  categories: [
    "Mieszkanie",
    "Żywność i środki czystości",
    "Internet i telefon",
    "Przejazdy",
    "Edukacja",
    "Podróże",
    "Jedzenie poza domem",
    "Zdrowie i Uroda",
    "Ubrania",
    "Rozrywka",
    "Prezenty",
    "Elektronika",
    "Kary",
    "Inne"
  ],
  articles: [{title: 'Article 1', addingDate: '01/10/2010'}]
}

// const initialState = [{title: 'Article 1', addingDate: '01/10/2010'}]


// function rootReducer(state = initialState, action) {
//   return state;
// };

// function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'ADD_RTICLE': 
//     return [
//       ...state,
//       action.payload
//     ];
//         default:
//       return state;
//   }
// };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORY: 
    console.log('state', state)
    const newCategories = [...state.categories, action.payload];
    return Object.assign({}, state, {
      categories: newCategories
    });
    case REMOVE_CATEGORY: 
    const updatedCategories = state.categories.filter(category => category !== action.payload);
    return Object.assign({}, state, {
      categories: updatedCategories
    });
        default:
      return state;
  }
};

export default rootReducer;

