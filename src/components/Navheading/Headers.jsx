// import { useState } from "react";

const Headers = () => {
  
  // const [username, setUsername] = useState('')
  
  // if(!data){
  //   setUsername('admin')
  // }
  // else{
  //   setUsername(data.firstName)
  // }

  const logOutuser = () => {
    localStorage.setItem('loggedInUser','');
    window.location.reload();

  }



  return (
    <div className="flex items-end justify-between">

      <h1 className="text-white font-medium text-2xl">
        Hello <br />
        <span className="text-3xl font-semibold">
          username👋
        </span>
      </h1>

      {/* Logout Button */}
      <button onClick={logOutuser} className=" bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-lg">Log Out</button>
    </div>
  );
};

export default Headers;
