import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Static artist data for sign-in validation
  const artistCredentials = {
    email: 'afrazmirza68@gmail.com',
    password: 'artist123', // Static password for demonstration purposes
    email: 'farzana511@gmail.com',
    password: 'artist123'
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    if (email === artistCredentials.email && password === artistCredentials.password) {
      // Redirect to the dashboard if credentials match
      navigate('/dashboard');
    } else {
      // Display error if credentials do not match
      setError('Invalid email or password');
    }
  };

  return (
    <div className="sign-in">
      <h2>Artist Sign In</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignIn}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
