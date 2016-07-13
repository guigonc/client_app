import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from './reducers/index'
import AppPage from './containers/AppPage'
import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'
import PricePage from './containers/PricePage'
import ContactPage from './containers/ContactPage'
import ContactCreatedPage from './containers/ContactCreatedPage'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

let store = createStore(
  combineReducers({...reducers, routing: routerReducer}),
  compose(applyMiddleware(thunk, createLogger()), window.devToolsExtension ? window.devToolsExtension() : f => f),
)

const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppPage}>
        <IndexRoute component={HomePage}/>
        <Route path="/about" component={AboutPage} />
        <Route path="/price" component={PricePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/created" component={ContactCreatedPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
