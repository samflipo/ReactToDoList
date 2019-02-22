import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Todo.css';

export default class Todo extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    // this.props.addTask(e.target[0].value)
    // e.target[0].value = ''
  }

  removeTask = (task) => {
    // this.props.removeTask(task)
  }

  removeAll = () => {
    // this.props.removeAll()
  }

  render () {
    console.log('========= tasks ========', this.props)
    const { tasks } = this.props

     return (
       <div className='App'>
          <h1>Todo list</h1>
          <div className='results'>
              <ol>
                { !tasks.length
                    ? <span>No tasks found</span>

                    : tasks.map((task, i) => <TaskItem
                        removeTask={this.removeTask}
                        key={i}
                        item={task}/>)
                }
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
              <button onClick={this.removeAll}>Remove all tasks</button>
            </div>
          </div>
       </div>
     )
   }
}

Todo.propTypes = {
  tasks: PropTypes.array,
  addTask: PropTypes.func,
  removeTask: PropTypes.func,
  removeAll: PropTypes.func
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
}
