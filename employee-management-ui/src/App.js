import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from "./Components/EmployeeList";
import "./App.css";
import AddEmployee from "./Components/AddEmployee";
import UpdateEmployee from "./Components/UpdateEmployee";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employeeList" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
