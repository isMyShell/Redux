import React ,{Component} from 'react'
import './index.css'
import { message } from 'antd';
import AddTodo from '../AddTodo'
import TodoList from '../TodoList'
import Footer from '../Footer'
class MyTodoList extends Component{
  constructor(){
    super()
    this.state = {
      filter: 'all',
      inputValue:'',
      list:[]
    }
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleAddTodo = () => {
    if(this.state.inputValue === ''){
      message.warning('你还没有输入内容');
      return
    }
    let complete = false
    let text = this.state.inputValue
    let list = [{text, complete }, ...this.state.list]
    this.setState({
      inputValue:'',
      list
    })
  }
  onDelete = (index) => {
    let list = this.state.list
    list.forEach((item, key) => {
      if(index === key){
        list.splice(key,1)
      }
    })
    this.setState({
      list
    })
  }
  changeComplete = (index) => {
    let list = this.state.list
    list.forEach((item,key) => {
      if (key === index){
        item.complete = !item.complete
      }
    })
    this.setState({
      list
    })
  }
  onCompleted = () => {
    this.setState({
      filter:'completed'
    })
  }
  onShowActive = () => {
    this.setState({
      filter: 'active'
    })
  }
  onShowAll = () => {
    this.setState({
      filter: 'all'
    })
  }
  
  render(){
    return(
      <div className='list'>
        <AddTodo 
          inputValue={this.state.inputValue}
          onChange={this.handleChange}
          addTodo={this.handleAddTodo}/>
        <TodoList 
          filter={this.state.filter}
          list={this.state.list}
          onDelete={(index) => this.onDelete(index)}
          changeComplete={(index) => this.changeComplete(index)}/>
        <Footer 
          onShowAll={this.onShowAll}
          onShowActive={this.onShowActive}
          onCompleted={this.onCompleted}/>
      </div>
    )
  }
}
export default MyTodoList