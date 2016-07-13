import React from 'react'
import { connect } from 'react-redux'

import Contact from '../components/Contact'
import { setField, addAssyncContact } from '../actions/index'

let mapStateToProps = state => ({
  contact: state.contact.data,
})

let mapDispatchToProps = dispatch => ({
  setField: (field, value) => dispatch(setField(field, value)),
  addContact: (contact) => dispatch(addAssyncContact(contact))
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
