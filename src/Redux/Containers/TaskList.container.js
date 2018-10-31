import { connect } from 'react-redux';
import { getTasks, addTask } from '../Actions/tasks.actions'
import { toggleAddTaskModal} from "../Actions/modals.actions";
import TaskList from '../../Components/TaskList/TaskList'


const mapStateToProps = (state) => ({
  tasks: state.tasks.tasksData,
  getTasksState: state.tasks.getTasksFetchingState,
  addTaskState: state.tasks.addTaskFetchingState
});

export default connect(mapStateToProps, {
  getTasks,
  addTask,
  toggleAddTaskModal
})(TaskList);
