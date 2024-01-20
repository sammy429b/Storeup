import React, { createContext, useState } from 'react';



const AuthContext = createContext(
  {
    user: false,
    setUser: (user: boolean) => { },
  }
); // Provide a default value

function AuthProvider({ children }: React.PropsWithChildren<{}>) {
  const [user, setUser] = useState(false);

  const contextValue = { user, setUser };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
