import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import React, { Component } from 'react';
import TodoApp from './components/todo/todo';
import Menu from './components/menu';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <TodoApp/>       
      </div>
    );
  }
}
