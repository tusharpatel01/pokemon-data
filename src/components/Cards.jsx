import React, { useEffect, useState } from 'react';

const Cards = ({ name, url }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchPokemonImage = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setImage(data.sprites.front_default); // Fetching the default sprite image
      } catch (err) {
        console.error('Error fetching Pokémon image:', err);
      }
    };

    fetchPokemonImage();
  }, [url]);

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '10px',
        textAlign: 'center',
        width: '150px',
        backgroundColor: '#f9f9f9',
      }}
    >
      {image ? (
        <img src={image} alt={name} style={{ width: '100px', height: '100px' }} />
      ) : (
        <div>Loading</div>
      )}
      <h3 style={{ color:"black",margin: '10px 0' }}>{name}</h3>
    </div>
  );
};

export default Cards;
