import React from 'react'
import { Link } from 'react-router';
import { PageHeader, Form, FormGroup, FormControl, ControlLabel, Col, Button } from 'react-bootstrap';

const Contact = ({ contact, added, setField, addContact }) => {
  return (
    <div>
      <PageHeader>Be one of the first to know our service</PageHeader>
      <Form horizontal>
        <FormGroup controlId="formHorizontalName">
          <Col componentClass={ControlLabel} sm={2}>Name</Col>
          <Col sm={8}><FormControl type="text" placeholder="Name" onChange={(e) => setField('name', e.target.value)} /></Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>Email</Col>
          <Col sm={8}><FormControl type="email" placeholder="Email" onChange={(e) => setField('email', e.target.value)} /></Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPhone">
          <Col componentClass={ControlLabel} sm={2}>Phone</Col>
          <Col sm={8}><FormControl type="phone" placeholder="Phone" onChange={(e) => setField('phone', e.target.value)} /></Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}><Button bsStyle="primary" onClick={() => addContact(contact)}>Send</Button></Col>
        </FormGroup>
      </Form>
    </div>
  )
}


export default Contact
