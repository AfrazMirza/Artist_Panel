import React from 'react';
const PaintingList = ({ paintings }) => {
  return (
    <div>
      <h1>Painting List</h1>
      <ul>
        {paintings.map((painting, index) => (
          <li key={index}>
            <h2>{painting.title}</h2>
            <p>Artist: {painting.artistName}</p>
            <img src={painting.image} alt={painting.title} style={{ width: '200px' }} />
            <p>Description: {painting.description}</p>
            <p>Type: {painting.artType}</p>
            <p>Price: Rs.{painting.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaintingList;
