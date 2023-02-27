import React from "react";
import { useState } from "react";
import EmployeeService from "../Services/EmployeeService";


const Login = () => {
  const [loginDetail, setloginDetail] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e, field) => {
    let actualValue = e.target.value;
    setloginDetail({ ...loginDetail, [field]: actualValue });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(loginDetail);

    if (
      loginDetail.username.trim() === "" ||
      loginDetail.password.trim() === ""
    )
    {
              alert("Enter valid username and password");
              return;
    }

    EmployeeService.loginUser(loginDetail).then((jwtTokenData)=>{
              console.log("userLogin: ");
              console.log(jwtTokenData);
}).catch(error=>{
              console.log(error);
              if(error.response.status === 400|| error.response.status === 404 )
              console.log(error.response.data.message);
              else
              console.log("Something went wrong on server!");
});

  };

  const reset = () => {
    setloginDetail({
      username: "",
      password: ""
    });
  };

  


  return (
    <div>
      <div style={{background:"#1255A5"}}>
        <div className="text-right text-white font-mono font-bold">
          <a
            href="http://localhost:3000/register"
            className="hover:bg-gray-600"
          >
            Register
          </a>
          &nbsp;&nbsp;
          <a href="http://localhost:3000/login" className="hover:bg-gray-600">
            Login
          </a>
        </div>
      </div>

      <div className="flex max-w-2xl mx-auto shadow-xl border-b">
        <div className="px-8 py-8">
          <div className="font-thin text-2xl font-bold text-white tracking-wider">
            <h1>Admin login</h1>
          </div>

          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-white text-sm font-normal">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={loginDetail.username}
              onChange={(e) => handleChange(e, "username")}
              className="h-10 w-96 border mt-2 px-2 py-2"
            ></input>
          </div>

          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-whi text-sm font-normal">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={loginDetail.password}
              onChange={(e) => handleChange(e, "password")}
              className="h-10 w-96 border mt-2 px-2 py-2"
            ></input>
          </div>

          <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button
              onClick={handleSubmitForm}
              className="rounded text-white font-semibold bg-green-400 hover:bg-green-800 py-2 px-6"
            >
              Login
            </button>

            <button
              onClick={reset}
              className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
