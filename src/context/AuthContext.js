// import React, { createContext, useState, useContext } from 'react';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [artists, setArtists] = useState([]);
//   const [currentArtist, setCurrentArtist] = useState(null);

//   const register = (username, password) => {
//     if (artists.some(artist => artist.username === username)) {
//       return false; // Username already exists
//     }
//     setArtists([...artists, { username, password }]);
//     return true; // Registration successful
//   };

//   const login = (username, password) => {
//     const artist = artists.find(artist => artist.username === username && artist.password === password);
//     if (artist) {
//       setCurrentArtist(artist);
//       return true;
//     }
//     return false;
//   };

//   const logout = () => {
//     setCurrentArtist(null);
//   };

//   return (
//     <AuthContext.Provider value={{ currentArtist, register, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
