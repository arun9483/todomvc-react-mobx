import React, { Component } from 'react';

class TodoItems extends Component {
  render() {
    return (
        <ul className="todo-list">
            <li className="completed">
                <div className="view">
                    <input className="toggle" type="checkbox" defaultChecked />
                    <label>Taste JavaScript</label>
                    <button className="destroy"></button>
                </div>
                <input className="edit" defaultValue="Create a TodoMVC template" />
            </li>
            <li>
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>Buy a unicorn</label>
                    <button className="destroy"></button>
                </div>
                <input className="edit" defaultValue="Rule the web" />
            </li>
            <li className="completed">
                <div className="view">
                    <input className="toggle" type="checkbox" defaultChecked />
                    <label>Taste JavaScript</label>
                    <button className="destroy"></button>
                </div>
                <input className="edit" defaultValue="Create a TodoMVC template" />
            </li>
        </ul>
    );
  }
}

export default TodoItems;
