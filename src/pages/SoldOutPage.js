import React from 'react';
// import { useNavigate } from 'react-router-dom';

const SoldOutPage = () => {
    // const navigate = useNavigate();
    // useEffect(() => {
    //     // Optionally, clear session storage or any authentication data here
    //     // Redirect to the Sign-In page after a brief delay or immediately
    //     navigate('/');
    //   }, [navigate]);

    return (
  <div className="sold-out-container">
    <h1>Sold Out</h1>
    <p>We're sorry, but this item is currently sold out.</p>
    <p>Check back soon or explore other available artworks!</p>
    <div className="button-container">
      <button onClick={() => window.history.back()} className="back-button">
        Go Back
      </button>
    </div>
  </div>);
};

export default SoldOutPage;
