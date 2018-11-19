const initialState = {
  tasks: [
    'task one',
    'task two',
    'task three',
    'task four'
  ]
}

function todo(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      }
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task !== action.task)
      }
    case REMOVE_ALL:
      return {
        ...state,
        tasks: []
      }
    default:
      return state
  }
}

export default todo
