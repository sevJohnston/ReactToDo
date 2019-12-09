import React from 'react';
import './App.css';
import TaskForm from './TaskForm.js';
import TaskList from './TaskList.js';
import Task from './Task.js';

class App extends React.Component {
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
    };
    this.addTaskClick = this.addTaskClick.bind(this);
    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addTaskClick() {
    /*
    let addTB = document.getElementById('addTask');
    const text = addTB.value;
    if (text == "")
    addTB.parentElement.classList.add('has-error');
    else{
        addTB.parentElement.classList.remove('has-error');
        let newTask = {
            task: text,
            isComplete: false
        }
        this.tasks.push(newTask);
        this.loadTasks();
        addTB.value = "";
    }
    */
   let tasks = JSON.parse(JSON.stringify(this.state.tasks));
    //I know there should be some task input here...
   this.setState({tasks});
    console.log("this is add task");
  }

  
  toggleTaskStatus(index) {

    //this.tasks[index].isComplete = !this.tasks[index].isComplete;       //change isComplete
    //this.loadTasks();       //call loadTask method again
    let tasks = JSON.parse(JSON.stringify(this.state.tasks));
    tasks[index].isComplete = !tasks[index].isComplete;
    //shouldn't there be a onClick event here?
    this.setState({tasks});
    console.log("This is toggle task status");
  }

  deleteTask(event, index) {
    //event.preventDefault();     //prevents default behavior (anchor tags going somewhere else) 
    //this.tasks.splice(index, 1);
    //this.loadTasks();
    event.preventDefault();
    let tasks = JSON.parse(JSON.stringify(this.state.tasks));
    tasks[index] = "";
    this.setState({tasks});
    console.log("This is delete task");
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">ToDo List</a>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="content-area row">
            <div className="col-md-2 col-xs-2 col-lg-2 col-sm-2"></div>
            <div className="col-md-8 col-xs-8 col-lg-8 col-sm-8">
              <h2>ToDo List</h2>
              <TaskForm onSubmit={this.addTask} />
              <TaskList tasks={this.state.tasks} toggleTaskStatus={this.toggleTaskStatus} deleteTask={this.deleteTask} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
