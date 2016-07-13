import React from 'react'
import { connect } from 'react-redux'

import App from '../components/App'
let mapStateToProps = (state, ownProps) => ({
  path: ownProps.location.pathname
})
export default connect(mapStateToProps)(App)
