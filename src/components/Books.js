import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

// create an app with a todo list
export default class TodoApp extends Component {
  state = {
    tasks: [
      'task one',
      'task two',
      'task three',
      'task four'
    ]
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      tasks: [...this.state.tasks, e.target[0].value]
    })
    e.target[0].value = ''
  }

  removeTask = (task) => {
    this.setState({
      tasks: this.state.tasks.filter(item => item !== task)
    })
  }

  render () {
   return (
     <div className='App'>
        <h1>Todo list</h1>
        <div className='results'>
            <ol>
              {this.state.tasks.map((task, i) => <TaskItem
                removeTask={this.removeTask}
                key={i}
                item={task}/>)}
            </ol>
        </div>
        <div className='action-container'>
          <div className='add'>
            <form onSubmit={this.handleSubmit}>
              <input type='text' />
              <button>Add task</button>
            </form>
          </div>
          <div className='remove'>
            <button>Remove all tasks</button>
          </div>
        </div>
     </div>
   )
 }
}

const TaskItem = ({ item, removeTask }) => {
  return (
    <li>
      <span>{item}</span>
      <button onClick={(e) => removeTask(item)}>Remove</button>
      </li>
  )
}

TaskItem.propTypes = {
  item: PropTypes.string,
  removeTask: PropTypes.func
};
