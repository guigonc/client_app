import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from './reducers/index'
import AppPage from './containers/AppPage'
import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'
import PricePage from './containers/PricePage'
import ContactPage from './containers/ContactPage'

import { Router, Route, hashHistory, IndexRoute } from 'react-router'

let store = createStore(reducers, compose(applyMiddleware(thunk, createLogger()), window.devToolsExtension ? window.devToolsExtension() : f => f))

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppPage}>
        <IndexRoute component={HomePage}/>
        <Route path="/about" component={AboutPage} />
        <Route path="/price" component={PricePage} />
        <Route path="/contact" component={ContactPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
