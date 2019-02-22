import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import HomePage from './HomePage'
import Todo from './Todo';
import Books from './Books';

const App = () => {
  return (
    <Router>
       <div>
         <ul>
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="/todo">Todo App</Link>
           </li>
           <li>
             <Link to="/books">Books</Link>
           </li>
         </ul>
         <hr />
         <Route exact path='/' component={HomePage} />
         <Route exact path="/todo" component={Todo} />
         <Route path="/books" component={Books} />
       </div>
     </Router>
  )
}

export default App
