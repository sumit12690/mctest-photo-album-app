import {
  ADD_USER_TO_FILTER,
  REMOVE_USER_FROM_FILTER,
} from '../constants/actionTypes';

export const userFilterReducer = (state = '', action) => {
  switch (action.type) {
    case ADD_USER_TO_FILTER:
      if (state.includes(action.user)) return state;
      return (state += action.user);
    case REMOVE_USER_FROM_FILTER:
      const reg = new RegExp(action.user, 'gi');
      return state.replace(reg, '');
    default:
      return state;
  }
};
