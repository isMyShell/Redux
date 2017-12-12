##redux
	npm i redux react-redux redux-thunk -S
	
目录
 
*	src
	* index.js 
	* app.js
	* router.js
 	* components
 		* AddTodo.js
 		* myTodoList.js
  	* store
  		* index.js
  		* action-types.js
  		* actions.js
  		* reducers.js
  

	
	```
	//router.js
	
	import { Provider } from 'react-redux'
	import store from './store/index'
	
	const Root = () => (
		<Provider store={store}>
			<Router history={browserHistory}>
		    <Route path='/' component={App}></Route>
		  </Router>
		</Provider>
	  
	)
	```
	
	```
	//store/index.js
	//applyMiddleware 异步
	
	import {createStore, applyMiddleware} from 'redux'
	import thunk from 'redux-thunk'
	import reducer from './reducers/index'
	
	const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
	const store = createStoreWithMiddleware(reducer)
	
	export default store
	```
	
	```
	//reducers.js
	
	import {combineReducers} from 'redux'

	import {
	  ADD_TODO
	} from '../action-types'

	let todos = (state = [] , action) => {
	  switch(action.type){
	    case ADD_TODO:
	    return [ 
	      ...state,
	       {
	         text : action.text,
	         completed : false
	       }]
	    default:
	      return state
	  }
	}
	
	export default combineReducers({
	  todos,
	  fliter
	})
	```
	
	```
	//actions.js
	
	import {
	  ADD_TODO
	} from '../action-types'
	
	export const addTodo = (text) => {
	  return {
	    type:ADD_TODO,
	    text
	  }
	}
	```
	
	```
	//action-types.js
	
	const ADD_TODO = 'ADD_TODO'
	```
	
	```
	//myTodoList.js
	
	import { connect } from 'react-redux'
	//引入action
	import {addTodo} from '../store/actions'
	
	class MyReduxTodoList extends Component {
	  addTodo = (text) => {
	     this.props.dispatch(addTodo(text))
	  }
	  render(){
	  	//引入store
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
	function select(state) {
		  return {
		    visibleTodos: state.todos,
		    fliter: state.fliter
		  }
		}
		
	
	export default connect(select)(MyReduxTodoList)
		  
	```
	
	
	
	
	
		