import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate(); // Hook for navigation
  // Example artist data (this could be fetched from an API)
  const artistProfile = {
    name: 'Afraz Mirza',
    bio: 'Portrait Artist',
    totalPaintings: 25,
    soldPaintings: 5,
    email: 'afrazmirza68@gmail.com',
    recentActivities: [
      'Added a new painting: "Sunset Over Water"',
      'Updated profile bio',
      'Sold "Mountain Majesty" for Rs.2500',
    ],
  };

  return (
    <div className="dashboard">
      <h2>Welcome to the Dashboard, {artistProfile.name}</h2>
      
      {/* Profile Section */}
      <section className="profile-section">
        <h3>Artist Profile</h3>
        <p><strong>Name:</strong> {artistProfile.name}</p>
        <p><strong>Email:</strong> {artistProfile.email}</p>
        <p><strong>Bio:</strong> {artistProfile.bio}</p>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <h3>Artwork Statistics</h3>
        <p><strong>Total Paintings:</strong> {artistProfile.totalPaintings}</p>
        <p><strong>Sold Paintings:</strong> {artistProfile.soldPaintings}</p>
      </section>

      {/* Recent Activities Section */}
      <section className="activities-section">
        <h3>Recent Activities</h3>
        <ul>
          {artistProfile.recentActivities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </section>

      {/* Manage Artworks Section */}
      <section className="manage-section">
        <h3>Manage Your Artworks</h3>
        <button onClick={() => navigate('/add-painting')}>Add New Painting</button>
        {/* <button onClick={() => alert('Navigate to Add New Painting')}>Add New Painting</button> */}
        {/* <button onClick={() => alert('Navigate to Edit Existing Paintings')}>Edit Existing Paintings</button> */}
      </section>
    </div>
  );
};

export default Dashboard;
