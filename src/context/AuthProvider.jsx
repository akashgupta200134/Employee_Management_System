import { createContext, useState, useEffect } from "react";
import { getLocalStorage } from "../utils/localstorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  

  useEffect(() => {
    const localStorageData = getLocalStorage();
    if (localStorageData) {
      const { employees, admin } = localStorageData;
      setUserData({ employees, admin });
    } else {
      console.warn("No data found in local storage!");
      setUserData({ employees: null, admin: null });
    }
  }, []);




  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
