import React ,{Component} from 'react'
import './index.css'
import {
  Button,
  Input, 
  Icon
} from 'antd'
class AddTodo extends Component{
  keyUp = (e) => {
    let currKey = 0
    currKey = e.keyCode || e.which || e.charCode;
    // let keyName = String.fromCharCode(currKey);
    return currKey
  }
  enterAdd = (e) => {
    if (this.keyUp(e) === 13) {
      this.props.addTodo()
    }
  }
  componentDidMount() {
    document.onkeyup = this.enterAdd
  }
  render(){
    return(
      <div className='addTodo'>
        <Input
          value={this.props.inputValue}
          className='text'
          placeholder="Enter some things"
          prefix={<Icon type="file-unknown" />}
          onChange={e => this.props.onChange(e)}/>
        <Button 
          type="primary"
          onClick={this.props.addTodo}>
          <Icon type="plus-circle-o" />
          Add
        </Button>
      </div>
    )
  }
}

export default AddTodo