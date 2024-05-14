import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

// Hook to use Context Provider
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
 

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
