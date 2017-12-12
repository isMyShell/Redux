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
  constructor(){
    super()
    this.state = {
      message:'Here is no notices!'
    }
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.filter === 'all'){
      this.setState({
        message: 'Here is no notices!'
      })
    }
    if (nextProps.filter === 'completed') {
      this.setState({
        message: 'Here is no completed notices!'
      })
    }
    if (nextProps.filter === 'active') {
      this.setState({
        message: 'Here is no active notices!'
      })
    }
  }
  render() {
    let filter = this.props.filter
    let list = []
    this.props.list.forEach((todo,index) => {
      if (filter === 'all'){
        list.push(<Todo
          key={index}
          todo={todo}
          onDelete={() => this.props.onDelete(index)}
          changeComplete={() => this.props.changeComplete(index)} />)
      }
      if (filter === 'completed'){
        if (todo.complete){
          list.push(<Todo
            key={index}
            todo={todo}
            onDelete={() => this.props.onDelete(index)}
            changeComplete={() => this.props.changeComplete(index)} />)
        }
      }
      if (filter === 'active'){
        if (!todo.complete) {
          list.push(<Todo
            key={index}
            todo={todo}
            onDelete={() => this.props.onDelete(index)}
            changeComplete={() => this.props.changeComplete(index)} />)
        }
      }
    })
    return (
      <div style={style}>
        {list.length > 0 
          ? list 
          : <Alert 
            message={this.state.message} 
            type="info" 
            style={{marginBottom:"8px"}}
            showIcon />}
      </div>
    )
  }
}

export default TodoList