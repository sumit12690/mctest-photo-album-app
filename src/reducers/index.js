import { combineReducers } from 'redux';
import { userFilterReducer } from './user.filter.reducer';
import { slideReducer } from './slide.reducer';
import { albumsReducer } from './albums.reducer';

export default combineReducers({
  albums: albumsReducer,
  userFilter: userFilterReducer,
  slide: slideReducer,
});
