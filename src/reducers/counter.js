import { INCREMENT } from '../actions/counter';

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
}

export default counterReducer;