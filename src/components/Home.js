import React from 'react';

function Home() {
  const containerStyle = {
    padding: '40px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h2>Welcome to Serenity Camp</h2>
      <img src="/banner.webp" alt="Serenity Camp Banner" style={{width: '80%', height: 'auto', borderRadius: '10px'}} />
      <p>Where serenity meets community and care for a better life.</p>
    </div>
  );
}

export default Home;
