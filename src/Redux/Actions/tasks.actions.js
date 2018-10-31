import { createAction } from 'redux-actions'
import api from '../../Config/Api'

export const getTasksState = createAction("GET_TASKS");
export const addTaskState = createAction('ADD_TASK');

export const getTasks = (page, orderBy, orderDirection) => async (dispatch) => {
  dispatch (getTasksState({ state: 'request' }));
  try {
    const res = await api.get_tasks(page, orderBy, orderDirection);
    if (res.data.status === 'ok') {
      dispatch(getTasksState({ state: 'success', data:  res.data.message }));
    } else {
      dispatch(getTasksState({ state: 'failure' }))
    }
  } catch({message}) {
    dispatch(getTasksState({ state: 'failure' }));
    console.log(message);
  }
};

export const addTask = (username, email, text, image) => async (dispatch) => {
  dispatch (addTaskState({ state: 'request' }));
  try{
    const res = await api.add_task(username, email, text, image);

    if (res.data.status === 'ok') {
      dispatch(addTaskState({ state: 'success', data: res.data.message }));
    } else {
      dispatch(addTaskState({ state: 'failure' }))
    }
  } catch ({message}) {
    dispatch(addTaskState({ state: 'failure' }))
    console.log(message);
  }
};
