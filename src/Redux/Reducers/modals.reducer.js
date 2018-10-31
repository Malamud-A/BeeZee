import { handleActions } from 'redux-actions';
import * as actions from '../Actions/modals.actions';


const initialState = {
  addTaskModalIsShown: false,
};

const modals = handleActions({
  [actions.toggleAddTaskModal] (state) {
    return {...state, addTaskModalIsShown: !state.addTaskModalIsShown}
  }
}, initialState);

export default modals
