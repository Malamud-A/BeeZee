import { combineReducers } from 'redux';

import tasks from './tasks.reducer';
import modals from './modals.reducer';

export default combineReducers({
  tasks,
  modals
});
