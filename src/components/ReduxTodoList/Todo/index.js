import React, {Component} from 'react'
import './index.css'
import {
  Icon
} from 'antd'
const style = { 
  paddingLeft: "5px", 
  width: "100%", 
  textAlign: 'left',
  background: '#eee', 
  borderRadius: '4px', 
  marginBottom: '4px' ,
  display:'flex',
  alignItems:'center'
}
const lineThrough  = {
  textDecorationLine: 'line-through'
}
class Todo extends Component {
  deleteTodo = (e) => {
    e.stopPropagation()
    this.props.deleteTodo()
  }
  render(){
    return(
      <div 
        className='todo'
        style={style}
        onClick={this.props.changeComplete}>
        { 
          this.props.todo.completed ? ( <Icon 
            type="pushpin" 
            style={{ marginRight: '5px', marginTop:'5px', alignSelf: 'flex-start'}} />
          ) : (<Icon 
            type="pushpin-o" 
            style={{ marginRight: '5px', marginTop: '5px', alignSelf: 'flex-start'}}/>)
        }

        <p style={this.props.todo.completed ? lineThrough : null}>
          {this.props.todo.text}
        </p>
        
        <Icon
          className='icon'
          type="close-circle" 
          onClick={(e) => this.deleteTodo(e)}/>
      </div>
    )
  }
}

export default Todo