import React, { Component } from 'react';
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: [
      {id: 0, content: 'Buy milk'},
      {id: 1, content: 'Make the bed'},
      {id: 2, content: 'Play Mario Kart'}
    ]
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center">Toto List</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
