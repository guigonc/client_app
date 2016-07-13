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
    dispatch(addContact());

    var hash_identity = document.cookie.replace(/(?:(?:^|.*;\s*)hash_identity\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    fetch((process.env.API_URL || 'https://contactracker.herokuapp.com') + '/contacts.json', { method: 'POST', body: JSON.stringify({contact: {...contact, hash_identity} }), headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    .then(response => { if (response.ok) hashHistory.push('/created') })
  }
}

export const addContact = () => (
  { type: 'ADD_CONTACT' }
)
