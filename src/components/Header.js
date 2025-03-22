
import { Link } from 'react-router-dom';

function Header() {
  const headerStyle = {
    background: '#4250ad',
    padding: '20px',
    textAlign: 'center'
  };

  const navStyle = {
    marginTop: '10px'
  };

  const linkStyle = {
    margin: '0 15px',
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#ffffff'  // Ensuring links are white
  };

  return (
    <header style={headerStyle}>
      <h1 style={{ margin: '0', color: '#ffffff' }}>Serenity Camp</h1>
      <nav style={navStyle}>
    
        <ul  style={{ listStyleType: 'none', paddingLeft: '0' }}>
          <Link style={linkStyle} to="/">Home</Link>
          <Link style={linkStyle} to="/about">About</Link>
          <Link style={linkStyle} to="/services">Services</Link>
          <Link style={linkStyle} to="/contact">Contact</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
