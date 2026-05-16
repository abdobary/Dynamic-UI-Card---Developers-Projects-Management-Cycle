// src/Context/AuthContext.jsx
import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();
// Think of Context as a global state container that any component can access directly, without passing props through intermediate components.

export const AuthProvider = ({ children }) => {
  const [ Data , setData] = useState(false);

  return (
    <AuthContext.Provider value={{ 
      Data,
      setData
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};