import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import location from './location_reducer'
import modal from './modal_reducers'

const rootReducer = combineReducers(  {
  entities,
  session,
  errors,
  location,
  modal
});

export default rootReducer;