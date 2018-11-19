export const ADD_TASK = 'ADD_TODO'
export const REMOVE_TASK = 'REMOVE_TODO'
export const REMOVE_ALL = 'REMOVE_ALL'

export const addTask = (task) => {
  return {
    type: ADD_TASK
    task
  }
}

export const removeTask = (task) {
  return {
    type: REMOVE_TASK
    task
  }
}

export const removeAll = () {
  return {
    type: REMOVE_ALL
  }
}
