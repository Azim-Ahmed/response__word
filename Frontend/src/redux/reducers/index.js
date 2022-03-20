/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';

import buses from './bus.reducer';

const rootReducer = combineReducers({
  buses,
});

export default rootReducer;
