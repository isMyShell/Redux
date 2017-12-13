import React from 'react'
import { Router, Route, browserHistory, Redirect} from 'react-router'

// import App from './App.js'
// import NoPage from './components/NoPage/index'
const App = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./App.js').default);
  }, 'App');
};
const NoPage = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./components/NoPage/index').default);
  }, 'NoPage');
};
const Root = () => (
  <Router 
    history={browserHistory}>
    {/* <Route path='/'>
      <IndexRoute component={App}></IndexRoute>
    </Route> */}
    <Route path='/home' getComponent={App}></Route>
    <Route path='/NoPage' getComponent={NoPage}></Route>
    <Redirect from='/' to='/home'></Redirect>
    <Redirect from='*' to='/NoPage'></Redirect>
  </Router>
)

export default Root