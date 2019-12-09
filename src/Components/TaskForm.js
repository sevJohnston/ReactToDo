import React from 'react';
import './App.css';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          task: 'This is the first task',
          isComplete: false
        },
        {
          task: 'This is the second one',
          isComplete: true
        }
      ],
      task: '',
    }
  }

  inputChanged(event) {
    const { value } = event.target;
    this.setState({ task: value });
  }
  submitTask(e) {
    e.preventDefault();
    const { task } = this.state;
    const { onSubmit } = this.props;
    onSubmit(task);
    this.setState({ task: '' });

  }

  render() {
    return (
      <form onSubmit={this.submitTask}>
        <div className="row input-area">
          <div className="col-md-1"></div>
          <div className="form-group col-md-9">
            tasks={this.state.tasks}
          </div>
        </div>
      </form>
    )
  }
}
export default TaskForm;
