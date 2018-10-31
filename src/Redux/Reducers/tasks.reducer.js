import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import * as actions from '../Actions/tasks.actions'

const initialState = {
  tasksData: {}
};

const getTasksFetchingState = handleActions({
  [actions.getTasksState](state, {payload}) {
    return payload.state
  }
}, 'none');

const addTaskFetchingState = handleActions({
  [actions.addTaskState](state, {payload}) {
    return payload.state
  }
}, 'none');

const tasksData = handleActions({
  [actions.getTasksState](state, {payload}) {
    if (payload.state === 'success')
      return payload.data;
    else
      return state
  },

  [actions.addTaskState](state, {payload}) {
    if (payload.state === 'success')
      return {
          ...state,
        tasks: [
            ...state.tasks,
            payload.data
        ]
      };
    else
      return state
  }
}, initialState.tasksData);

export default combineReducers ({
  getTasksFetchingState,
  addTaskFetchingState,
  tasksData
})
