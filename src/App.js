import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.min.css'
// import { Provider } from 'react-redux'
// import store from './store/index'
import MyTodoList from './components/StateAndPropsTodoList/MyTodoList'
import MyReduxTodoList from './components/ReduxTodoList/MyReduxTodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MyTodoList></MyTodoList>
        {/* <Provider store={store}>
          <MyReduxTodoList></MyReduxTodoList>
        </Provider> */}
        <MyReduxTodoList></MyReduxTodoList>
      </div>
    );
  }
}

export default App;
