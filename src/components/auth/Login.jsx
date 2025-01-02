import { useState } from "react";




const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is", email);
    console.log("password is ", password);
  };

  return (
    <>
      <div className=" flex h-screen  w-screen  items-center  justify-center ">
        <div className=" border-2 border-emerald-600 p-20  rounded-xl ">
          <form
            onSubmit={(e) => {
              submitHandler(e);

              setEmail("");
              setPassword("");
            }}
            className=" flex flex-col items-center justify-center gap-5 "
          >
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className="  rounded-full text-white border-2 py-3 px-5 bg-transparent placeholder:text-gray-500 "
              type="email"
              placeholder="Enter Your Email..."
            ></input>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              className="  rounded-full text-white border-2 py-3 px-5 bg-transparent placeholder:text-gray-500 mt-3"
              type="password"
              placeholder="Enter Your Password..."
            ></input>
            <button className=" text-white border-none outline-none bg-emerald-600 px-5 text-lg font-semibold py-3 rounded-lg mt-5">
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default login;
