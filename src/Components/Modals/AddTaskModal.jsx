import React, {Component} from 'react';

class AddTaskModal extends Component {

  state = {
    username: '',
    email: '',
    text: '',
    image: ''
  };

  handleInputChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    });
  };

  addTask = e => {
    e.preventDefault();
    this.props.addTask(...this.state)
  };

  render() {
    return (
        <div className={`modal ${this.props.visible ? 'visible' : ''}`}>
          <div className="modal__body">
            <form className="modal__form form">
              <input
                  className='form__field'
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  name='username'
                  type="text"
              />

              <input
                  className='form__field'
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name='email'
                  type="text"
              />

              <input
                  className='form__field'
                  value={this.state.text}
                  onChange={this.handleInputChange}
                  name='text'
                  type="text"
              />

              <input
                  className='form__field'
                  value={this.state.image}
                  onChange={this.handleInputChange}
                  name='image'
                  type="file"
              />
              <button onClick={this.addTask} type="submit">Save</button>
            </form>

          </div>
        </div>
    );
  }
}

export default AddTaskModal;
