import { connect } from 'react-redux';

import presentation from '../components/Todo'

import { addTask, removeTask, removeAll } from '../action/todo'

const mapStateToProps({ tasks }) => ({ tasks: [] })

const mapDispatchToProps(dispatch) {
  return {
    addTask: (task) => dispatch(addTask(task)),
    remoTask: (task) => dispatch(removeTask(task)),
    removeAll: (task) => dispatch(addAll())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(presentation);
