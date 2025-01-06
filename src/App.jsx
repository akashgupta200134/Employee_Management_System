import { useContext, useEffect, useState } from 'react';
import Login from '../src/components/auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData] = useContext(AuthContext); // Global user data from AuthContext

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role); // Set role ('admin' or 'employee')
      setLoggedInUserData(userData.data); // Set user details for employees
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (userData) {
      const employee = userData.find((e) => e.email === email && e.password === password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert('Invalid Credentials');
      }
    } else {
      alert('No user data found!');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem('loggedInUser');
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard changeUser={handleLogout} />}
      {user === 'employee' && (
        <EmployeeDashboard changeUser={handleLogout} loggedInUser={loggedInUserData} />
      )}
    </>
  );
};

export default App;
