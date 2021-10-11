import {
  ADD_USER_TO_FILTER,
  REMOVE_USER_FROM_FILTER,
  NEXT_PHOTO,
  PREV_PHOTO,
  CURRENT_PHOTO,
  COUNT_PHOTO,
} from '../constants/actionTypes';

export const addUserToFilter = (user) => {
  return {
    type: ADD_USER_TO_FILTER,
    user,
  };
};

export const removeUserFromFilter = (user) => {
  return {
    type: REMOVE_USER_FROM_FILTER,
    user,
  };
};

export const nextPhoto = () => {
  return {
    type: NEXT_PHOTO,
  };
};

export const prevPhoto = () => {
  return {
    type: PREV_PHOTO,
  };
};

export const currentPhoto = (n) => {
  return {
    type: CURRENT_PHOTO,
    currentPhoto: n,
  };
};

export const countPhoto = (n) => {
  return {
    type: COUNT_PHOTO,
    totalPhotosCount: n,
  };
};
