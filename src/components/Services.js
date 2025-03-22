import React from 'react';

function Services() {
  const services = [
    {
      name: 'Group Walking',
      description: 'Join group walking sessions for exercise and enjoyment in beautiful surroundings.',
      img: '/group.webp'
    },
    {
      name: 'Arts and Crafts',
      description: 'Express your creativity with our arts and crafts workshops.',
      img: '/arts.webp'
    },
    {
      name: 'Psychological Support',
      description: 'Access professional support to enhance mental well-being.',
      img: '/support.webp'
    },
    {
      name: 'Nutritional Education',
      description: 'Learn about nutrition and healthy eating habits from experts.',
      img: '/education.webp'
    }
  ];

  return (
    <div style={{ padding: '20px',
        textAlign: 'center' }}>
      {services.map(service => (
        <div key={service.name} style={{ textAlign: 'center', marginBottom: '40px' }}>
          <img src={service.img} alt={service.name} style={{ width: '300px', height: '200px', borderRadius: '10px' }} />
          <h3>{service.name}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;
