import { combineReducers } from 'redux';

import trackerReducer from './trackerReducer';

export default combineReducers({
  trackerList: trackerReducer,
})
