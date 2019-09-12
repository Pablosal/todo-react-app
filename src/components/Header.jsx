import React from 'react';
import { Link } from 'react-router-dom';
const Header = props => {
  return (
    <div style={headerStyle}>
      <nav>
        <ul>
          <Link style={linkStyle} to='/'>
            Home
          </Link>
          |
          <Link style={linkStyle} to='/about'>
            About
          </Link>
        </ul>
      </nav>
    </div>
  );
};
const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center'
};
const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
};
export default Header;
