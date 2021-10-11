import {
  COUNT_PHOTO,
  CURRENT_PHOTO,
  NEXT_PHOTO,
  PREV_PHOTO,
} from '../constants/actionTypes';

const initialState = {
  currentPhoto: 1,
  totalPhotosCount: 0,
};

export const slideReducer = (state = initialState, action) => {
  switch (action.type) {
    case PREV_PHOTO:
      if (state.currentPhoto === 0) return state;

      return {
        ...state,
        currentPhoto: state.currentPhoto - 1,
      };
    case NEXT_PHOTO:
      if (state.currentPhoto === state.totalPhotosCount - 1) return state;
      return {
        ...state,
        currentPhoto: state.currentPhoto + 1,
      };
    case CURRENT_PHOTO:
      return {
        ...state,
        currentPhoto: action.currentPhoto,
      };
    case COUNT_PHOTO:
      return {
        ...state,
        totalPhotosCount: action.totalPhotosCount,
      };
    default:
      return state;
  }
};
