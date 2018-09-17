import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    content: ''
  }

  handleOnChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    if(this.state.content !== '') {
      this.props.addTodo(this.state)
      this.setState({
        content: ''
      })
    }
  }

  render() {
    return(
      <form onSubmit={this.handleOnSubmit}>
        <label>New Todo:</label>
        <input type="text" value={this.state.content} onChange={this.handleOnChange} />
      </form>
    )
  }
}

export default AddTodo
