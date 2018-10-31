import { connect } from 'react-redux';
import { addTask } from '../Actions/tasks.actions'
import { toggleAddTaskModal } from "../Actions/modals.actions";
import App from '../../App'


const mapStateToProps = (state) => ({
  addTaskState: state.tasks.addTaskFetchingState,
  addTaskModalIsShown: state.modals.addTaskModalIsShown
});

export default connect(mapStateToProps, {
  addTask,
  toggleAddTaskModal
})(App);
