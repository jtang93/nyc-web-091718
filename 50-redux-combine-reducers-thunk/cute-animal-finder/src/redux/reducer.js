// import { ADD_USER, UPDATE_ANIMAL } from './types';
import { combineReducers } from 'redux';
import animalReducer from './reducers/animalReducer'
import userReducer from './reducers/userReducer'

// const initialState = {
//   users: [],
//   animalSrc: null,
// };

// words, oh redux
// reduce => reduces elements in an array to one value
// reduce just changes things eventually
// export default function reducer(state = initialState, action) {
//   // action => POJO => { type, payload }
//   switch(action.type) {
//     case ADD_USER:
//       return { ...state, users: [...state.users, action.payload] };
//     case UPDATE_ANIMAL:
//       return { ...state, animalSrc: action.payload };
//
//     // DELETE_USER
//     // LOGOUT
//     // UPDATE_USER
//     // LIKE_ANIMAL
//     // DISLIKE_ANIMAL ??????????????????
//
//     default:
//       return state;
//   }
// }





export default combineReducers({
  user: userReducer,
  animal: animalReducer,
})
