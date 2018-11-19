import { combineReducers } from 'redux'

import todo from './todo'

const reducer = combineReducers({ todo })
const store = createStore(reducer)

export default store
