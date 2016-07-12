import React from 'react'
import { connect } from 'react-redux'

import Contact from '../components/Contact'
// import { thunkExample } from '../actions/example'

// let mapStateToProps = state => ({})
//
// let mapDispatchToProps = dispatch => ({
//   thunkExample: () => dispatch(thunkExample())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default connect()(Contact)
