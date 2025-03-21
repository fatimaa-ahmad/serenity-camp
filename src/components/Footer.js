import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#ffb6c1',
      padding: '20px',
      textAlign: 'center',
      color: '#800080'
    }}>
      <p>&copy; {new Date().getFullYear()} Serenity Camp. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
