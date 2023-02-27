import React from "react";
import HomePage from "./HomePage";
import 'animate.css';
document.body.style = 'background: #041B36;';

const Register = () => {
  return (
    <div>
     <div style={{backgroundColor:"#1255A5"}}>
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
      <div className="flex max-w-2xl mx-auto shadow-xl border-b " style = {{float: "right", padding:"25px"}}>
        <div className="px-8 py-8 text-white">
          <div className=" text-2xl tracking-wider">
            <h1>Admin Registeration</h1>
          </div>

          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-white text-sm font-normal">
              Name:
            </label>
            <input
              type="text"
              name="register_name"
              //             value={employee.firstName}
              // onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2"
            ></input>
          </div>

          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-white text-sm font-normal">
              Email:
            </label>
            <input
              type="email"
              name="register_email"
              //             value={employee.lastName}
              // onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2"
            ></input>
          </div>

          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-white text-sm font-normal">
              Id number:
            </label>
            <input
              type="text"
              name="register_id"
              //             value={employee.firstName}
              // onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2"
            ></input>
          </div>

          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-white text-sm font-normal">
              Set password
            </label>
            <input
              type="password"
              name="register_password"
              //             value={employee.firstName}
              // onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2"
            ></input>
          </div>


          <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button
              //             onClick={saveEmployee}
              className="rounded text-white font-semibold bg-green-400 hover:bg-green-800 py-2 px-6"
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <HomePage/>
    </div>
  );
};
export default Register;
