import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {
const navigate = useNavigate();

const editEmployee = (e, id) => {
e.preventDefault();
navigate(`/editEmployee/${id}`);
};

return (
<tr key={employee.id}>
              <td className="text-left px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">{employee.firstName}</div>
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">{employee.lastName}</div>
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">{employee.dept}</div>
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">{employee.address}</div>
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">{employee.salary}</div>
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">{employee.email}</div>
              </td>

              <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                            <button
                            type="button"
                            className="link-button text-sm text-indigo-500 hover:text-indigo-900 hover:cursor-pointer"
                            onClick={(e, id) => editEmployee(e, employee.id)}
                            >
                            Edit
                            </button>
                            &nbsp;&nbsp;&nbsp;
                            <button
                            type="button"
                            className="link-button text-sm text-indigo-500 hover:text-indigo-900 hover:cursor-pointer"
                            onClick={(e, id) => deleteEmployee(e, employee.id)}
                            >
                            Delete
                            </button>
              </td>

</tr>
);
};

export default Employee;
