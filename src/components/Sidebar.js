import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="sidebar">
    <h3>Menu</h3>
    <ul>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/add-painting">Add Painting</Link></li>
      <li><Link to="/paintings">View Paintings</Link></li>
      <li><Link to="/sold-out-container">Sold Out</Link></li>
      <li><Link to="/sign-in-page">Sign-In</Link></li>
    </ul>
  </div>
);

export default Sidebar;
