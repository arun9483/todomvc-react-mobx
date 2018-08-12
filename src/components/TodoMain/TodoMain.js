import React, { Component } from 'react';

import TodoItems from './../TodoItems/TodoItems';

class TodoMain extends Component {
  render() {
    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <TodoItems></TodoItems>
        </section>
    );
  }
}

export default TodoMain;