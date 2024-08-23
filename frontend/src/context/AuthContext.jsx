import React, { createContext, useState, useContext } from 'react';

// Create AuthContext
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
    const [loggedInUsername, setLoggedInUsername] = useState('');

    const login = (username) => {
        setLoggedInUsername(username);
    };

    const logout = () => {
        setLoggedInUsername('');
    };

    return (
        <AuthContext.Provider value={{ loggedInUsername, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook for using auth context
export const useAuth = () => {
    return useContext(AuthContext);
};
