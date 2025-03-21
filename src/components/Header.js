import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const headerStyle = {
    backgroundColor: '#ffb6c1', // light pink
    padding: '20px',
    textAlign: 'center'
  };

  const navStyle = {
    marginTop: '10px'
  };

  const linkStyle = {
    margin: '0 15px',
    fontWeight: 'bold',
    fontSize: '18px'
  };

  return (
    <header style={headerStyle}>
      <h1 style={{ margin: '0', color: '#800080' }}>Serenity Camp</h1>
      <nav style={navStyle}>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/about">About</Link>
        <Link style={linkStyle} to="/services">Services</Link>
        <Link style={linkStyle} to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
