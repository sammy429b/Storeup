import React, { createContext, useState } from 'react';

const AuthContext = createContext(); // 

function AuthProvider({ children }) {
  const [user, setUser] = useState(false);

  
  const contextValue = { user, setUser};

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
