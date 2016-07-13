import { hashHistory } from 'react-router'
import { push } from 'react-router-redux'

export const SET_FIELD = 'SET_FIELD'
export const ADD_CONTACT = 'ADD_CONTACT'

export const setField = (field, value) => (
  {
    type: SET_FIELD,
    field,
    value
  }
)

export const addAssyncContact = (contact) => {
  return (dispatch) => {
    hashHistory.push('/created')
    dispatch(addContact());
    fetch('http://api.contactracker.com/contacts.json', { method: 'POST', body: JSON.stringify({ contact: contact }), headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
  }
}

export const addContact = () => (
  { type: 'ADD_CONTACT' }
)
