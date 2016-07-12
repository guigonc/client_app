import React from 'react'
import { connect } from 'react-redux'

import Home from '../components/Home'
// import { thunkExample } from '../actions/example'

// let mapStateToProps = state => ({})
//
// let mapDispatchToProps = dispatch => ({
//   thunkExample: () => dispatch(thunkExample())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default connect()(Home)
