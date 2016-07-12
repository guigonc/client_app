import React from 'react'
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, Grid } from 'react-bootstrap'

const App = ({ children }) => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Shoplist</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#"><Link to="/about">About</Link></NavItem>
        <NavItem eventKey={1} href="#"><Link to="/price">Price</Link></NavItem>
        <NavItem eventKey={1} href="#"><Link to="/contact">Contact</Link></NavItem>
      </Nav>
    </Navbar>
    <Grid>
      {children}
    </Grid>
  </div>
)

export default App
