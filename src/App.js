import React, { Component } from 'react';
import './App.css';
import TaskList from './Redux/Containers/TaskList.container';
import AddTaskModal from './Components/Modals/AddTaskModal'


class App extends Component {

  render() {
    return (
      <div className="App">
        <TaskList/>
        <AddTaskModal
            toggleModal={this.props.toggleAddTaskModal}
            addTask={this.props.addTask}
            visible={this.props.addTaskModalIsShown}
        />
      </div>
    );
  }
}

export default App;
