import React from 'react'
import { Link, hashHistory } from 'react-router';
import { Navbar, Nav, NavItem, Grid } from 'react-bootstrap'
import { track } from '../../lib/tracker'
const App = ({ children, path }) => (
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
      {track(path)}
      {children}
    </Grid>
  </div>
)

export default App
