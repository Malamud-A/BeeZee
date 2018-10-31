import React, {Component, Fragment} from 'react';
import Task from './Task'

class TaskList extends Component {


  componentDidMount() {
    this.props.getTasks();
  }


  render() {
    return (
        <Fragment>
          <button onClick={this.props.toggleAddTaskModal}>Add component</button>
          {this.props.getTasksState === 'success' &&
            this.props.tasks.tasks.map (task => (<Task key={task.id} task={task}/>))
          }
        </Fragment>
    );
  }
}

export default TaskList;
