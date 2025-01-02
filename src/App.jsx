//  import Login from './components/auth/login';
import AdminDashboard from './components/Dashboard/AdminDashboard';
// import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';

import { useEffect } from "react";
import { getLocalStorage, setLocalStorage } from './utils/localstorage';


const App = () => {
  
  

  useEffect(() => {
      // setLocalStorage();
      getLocalStorage();
      // Call your function to set local storage
  }, []); // Dependency array ensures it runs only once when the component mounts
  


  return (
    <>
    <div  className=''>
{/* 
         <Login  /> */}

         {/* <EmployeeDashboard/> */}

  <AdminDashboard/>
         
    </div>

   




    </>








  )
}

export default App