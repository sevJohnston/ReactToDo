import React from 'react';
import './App.css';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  onToggleTaskStatus() {
    const { index, onToggleTaskStatus } = this.props;
    onToggleTaskStatus(index);
  }

  onDeleteTask(event) {
    event.preventDefault();
    const { index, deleteTask } = this.props;
    deleteTask(index);
  }

  render() {
    const { task } = this.props;
    const taskClass = `col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text ${(task.isComplete) ? 'complete' : ''}`
    const checked = (task.isComplete) ? "checked" : "";
    return (
      <li className="list-group-item checkbox">
        <div className="row">
          <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
            <label>
              <input id="toggleTaskStatus" type="checkbox" value=""
                checked={checked}
                onChange={this.onToggleTaskStatus} />
            </label>
          </div>
          <div> className={taskClass}>
              {task.task}</div>
          <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
            <a className="" href="/" onClick={this.onDeleteTask}>
              <input id="deleteTask" className="delete-icon glyphicon glyphicon-trash" />
            </a>
          </div>
        </div>
      </li>
    )
  }
}


export default Task;
