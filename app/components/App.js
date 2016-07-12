import React from 'react'
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <ul role="nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/price">Price</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
    {children}
  </div>
)

export default App
