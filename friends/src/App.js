import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Protected from './components/Protected';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to='/public'>Home Page</Link>
            </li>
            <li>
              <Link to='/protected'>Friend List</Link>
            </li>
          </ul>
          <h1>Your Friends List</h1>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/protected" component={Protected} />
        </div>
      </Router>
    );
  }
}

export default App;
