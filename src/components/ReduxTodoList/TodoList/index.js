import React, { Component } from 'react'
import { Alert } from 'antd'
import Todo from '../Todo'
const style = {
  width: "100%",
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginBottom: '4px'
}
class TodoList extends Component {
  render() {
    return (
      <div style={style}>
        {this.props.todos.map((todo, index) => {
          return <Todo 
            key={index.toString()}
            todo={todo}
            changeComplete={() => this.props.changeComplete(index)}
            deleteTodo={() => this.props.deleteTodo(index)}></Todo>
        })}
      </div>
    )
  }
}

export default TodoList