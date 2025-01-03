import Login from "./components/auth/login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "./utils/localstorage";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@gmail.com" && password == "123") {
     setUser('admin');
      
    }

     else if (email == "user@gmail.com" && password == "123") {
      setUser('employee');
      
      
   
    } 
    else {
      alert("Invalid Credentials");
    }
  };


  useEffect(() => {
    setLocalStorage();
    // getLocalStorage();
    // Call your function to set local storage
  }, []); // Dependency array ensures it runs only once when the component mounts

  return (
    <>
      <div className="">
        {!user ? <Login  handleLogin={handleLogin}/> : "" }

        {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard/>} 



      
      </div>
    </>
  );
};

export default App;
