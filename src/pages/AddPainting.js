import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPainting = ({ addPainting }) => {
  const navigate = useNavigate(); // Hook for navigation
  const [title, setTitle] = useState('');
  const [artistName, setArtistName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState(''); // New state for description
  const [artType, setArtType] = useState(''); // New state for type of artwork
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const newPainting = {
      title,
      artistName,
      image,
      description, // Include description in the new painting object
      artType,     // Include artType in the new painting object
      price: parseInt(price) || 0,
    };
    
    // Call the addPainting function passed as a prop
    addPainting(newPainting);

    // Reset the form fields
    setTitle('');
    setArtistName('');
    setImage('');
    setDescription(''); // Reset the description field
    setArtType('');     // Reset the artType field
    setPrice('');

    // Navigate to the PaintingList page
    navigate('/paintings');
  };

  return (
    <div>
      <h1>Add a New Painting</h1>
      <form onSubmit={handleSubmit} className="painting-form">
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Artist Name:</label>
        <input type="text" value={artistName} onChange={(e) => setArtistName(e.target.value)} required />

        <label>Image URL:</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>

        <label>Type of Artwork:</label>
        <input type="text" value={artType} onChange={(e) => setArtType(e.target.value)} required />

        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required min="0" step="500" />

        <button type="submit">Submit</button> {/* Use type="submit" for the button */}
      </form>
    </div>
  );
};

export default AddPainting;
