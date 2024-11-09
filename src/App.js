import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import AddPainting from './pages/AddPainting';
import PaintingsList from './pages/PaintingsList';
import SignIn from './pages/SignIn';
import Logout from './pages/Logout';
import SoldOutPage from './pages/SoldOutPage';
import SignInPage from './/pages/SignInPage';
import CreateAccountPage from './pages/CreateAccountPage';
// import Login from './pages/Login';

const App = () => {
  const [paintings, setPaintings] = useState([]);

  const addPainting = (newPainting) => {
    setPaintings([...paintings, newPainting]);
  };

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-painting" element={<AddPainting addPainting={addPainting} />} />
            <Route path="/paintings" element={<PaintingsList paintings={paintings} />} />
            {/* 1 */}
            {/* <Route path="/login" element={<Login />} /> */}
            {/* 2 */}
            <Route path="/sign-in-page" element={<SignInPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/sold-out-container" element={<SoldOutPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
