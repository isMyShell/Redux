import React, {Component}  from 'react'
import { connect } from 'react-redux'
//action-types
import { 
  VisibilityFilters 
} from '../../../store/action-types/index'
//actions
import {addTodo, deleteTodo} from '../../../store/actions/addTodo'
import toggleTod from '../../../store/actions/toggleTodo'
import visibilityFilter from '../../../store/actions/visibilityFilters'
import './index.css'
import AddTodo from '../AddTodo'
import Footer from '../Footer'
import TodoList from '../TodoList'
import {trim} from '../../../utils/utils'
import { message } from 'antd';
class MyReduxTodoList extends Component {
  addTodo = (text) => {
    if ( trim(text) ){
      this.props.dispatch(addTodo(text))
    }else{
      message.warning('您还没有输入内容');
    }
  }
  handleChangeComplete = (index) => {
    this.props.dispatch(toggleTod(index))
  }
  handleDeleteTodo = (index) => {
    this.props.dispatch(deleteTodo(index))
  } 
  handleFiter = (fliter) => {
    this.props.dispatch(visibilityFilter(fliter))
  }
  render(){
    const { visibleTodos, fliter}  = this.props
    return (
      <div className='list'>
        <AddTodo
          addTodo={this.addTodo}></AddTodo>
        <TodoList
          todos={visibleTodos}
          fliter={fliter}
          changeComplete={this.handleChangeComplete}
          deleteTodo={this.handleDeleteTodo}></TodoList>
        <Footer 
          handleFiter={this.handleFiter}>
          </Footer>
      </div>
    )
  }
}
function filterTodos(todos, fliter) {
  switch (fliter){
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((todo) => !todo.completed)
    default :
    return todos
  }
}
function select(state) {
  return {
    visibleTodos: filterTodos(state.todos, state.fliter),
    fliter: state.fliter
  }
}
export default connect(select)(MyReduxTodoList)