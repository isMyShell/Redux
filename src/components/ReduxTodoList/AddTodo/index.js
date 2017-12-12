import React ,{Component} from 'react'
import './index.css'
import {
  Button,
  Input, 
  Icon
} from 'antd'
class AddTodo extends Component{
  addTodo = (e) => {
    let node = this.input.refs.input
    let text = node.value
    this.props.addTodo(text)
    node.value = ''
  }
  render(){
    return(
      <div className='addTodo'>
        <Input
          defaultValue=''
          className='text'
          placeholder="Enter some things"
          prefix={<Icon type="file-unknown"/>}
          ref={(input) => this.input = input}/>
        <Button 
          type="primary"
          onClick={this.addTodo}>
          <Icon type="plus-circle-o" />
          Add
        </Button>
      </div>
    )
  }
}

export default AddTodo