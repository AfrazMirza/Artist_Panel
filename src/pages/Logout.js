import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Optionally, clear session storage or any authentication data here
    // Redirect to the Sign-In page after a brief delay or immediately
    navigate('/');
  }, [navigate]);

  return (
    <div className="logout">
      <h2>You have successfully logged out.</h2>
      <p>Redirecting to the Sign-In page...</p>
    </div>
  );
};

export default Logout;
