import React, { Component } from 'react';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

class App extends Component {
  state = {
    todos: [
      {id: 0, content: 'Buy milk'},
      {id: 1, content: 'Make the bed'},
      {id: 2, content: 'Play Mario Kart'}
    ]
  }

  removeTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({todos})
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({todos})
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center">Toto List</h1>
        <Todos todos={this.state.todos} removeTodo={this.removeTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
