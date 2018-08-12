import React, { Component } from 'react';
import './App.css';

import TodoHeader from './components/TodoHeader/TodoHeader';
import TodoMain from './components/TodoMain/TodoMain';
import TodoFooter from './components/TodoFooter/TodoFooter';

class App extends Component {
  render() {
    return (
      <div>
        <section className="todoapp">
          <TodoHeader></TodoHeader>
          <TodoMain></TodoMain>
          <TodoFooter></TodoFooter>
        </section>
        <footer className="info">
          <p>Double-click to edit a todo</p>
          <p>Created by <a href="http://github.com/arun9483/">arun9483</a></p>
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
