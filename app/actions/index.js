import { hashHistory } from 'react-router'
import { push } from 'react-router-redux'
import { send } from '../../lib/tracker'

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
    dispatch(addContact());

    send(contact)
    .then(response => { if (response.ok) hashHistory.push('/created') })
  }
}

export const addContact = () => (
  { type: 'ADD_CONTACT' }
)
