import Login from "./components/auth/login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import { useEffect, useState } from "react";
import {setLocalStorage } from "./utils/localstorage";

const App = () => {
  const [user, setUser] = useState(null); 
   const [loggedInUserData, setLoggedInUserData] = useState(null)

  const Authdata = useContext(AuthContext);
  // console.log( Authdata.employees);

  
  // useEffect(() => {
  //  if(Authdata){
  //    const loggedInUser = localStorage.getItem('loggedInUser')
  //    if(loggedInUser) {
  //     setUser(loggedInUser.role)
  //    }
  //  }
  
   
  // }, [Authdata]);
  
  


  const handleLogin = (email, password) => {
    if (email == "admin@gmail.com" && password == "123") {
      setUser('admin');
      localStorage.setItem('loggedInUser',JSON.stringify({role : 'admin'}))

    }
    else if (Authdata) {
      const employee = Authdata.employees.find((e) => email == e.email && password == e.password)
      if(employee){

          setUser('employee');
          setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({role : 'employee'}))
      }
    
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
        {!user ? <Login handleLogin={handleLogin} /> : ""}

        {user === "admin" ?  <AdminDashboard /> : (user === 'employee' ? <EmployeeDashboard data={loggedInUserData} />: null)}






      </div>
    </>
  );
};

export default App;
