import React from 'react'
import {Router, Route, browserHistory} from 'react-router'

import App from './App.js'
const Root = () => (
  <Router 
    history={browserHistory}>
    <Route path='/' component={App}>

    </Route>

  </Router>
)

export default Root