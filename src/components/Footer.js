import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#4250ad',
      padding: '20px',
      textAlign: 'center',
      color: '#ffffff'
    }}>
      <p>&copy; {new Date().getFullYear()} Serenity Camp. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
