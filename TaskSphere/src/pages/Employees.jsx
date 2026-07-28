import React, { useState } from "react";
import {
  FaUsers,
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
  FaTimes,
  FaSave,
} from "react-icons/fa";

import "../styles/Employees.css";

const Employees = () => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Robert Onsate",
      email: "robert@gmail.com",
      department: "IT",
      role: "Software Developer",
      phone: "+254712345678",
      status: "Active",
    },
    {
      id: 2,
      name: "Mary Jane",
      email: "mary@gmail.com",
      department: "Finance",
      role: "Accountant",
      phone: "+254723456789",
      status: "Active",
    },
    {
      id: 3,
      name: "John Doe",
      email: "john@gmail.com",
      department: "Human Resource",
      role: "HR Officer",
      phone: "+254734567890",
      status: "Inactive",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    role: "",
    phone: "",
    status: "Active",
  });

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase()) ||
    employee.email.toLowerCase().includes(search.toLowerCase()) ||
    employee.department.toLowerCase().includes(search.toLowerCase()) ||
    employee.role.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const openAddModal = () => {
    setEditingEmployee(null);

    setFormData({
      name: "",
      email: "",
      department: "",
      role: "",
      phone: "",
      status: "Active",
    });

    setShowModal(true);
  };

  const openEditModal = (employee) => {
    setEditingEmployee(employee);
    setFormData(employee);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingEmployee(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.department ||
      !formData.role ||
      !formData.phone
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (editingEmployee) {
      setEmployees(
        employees.map((employee) =>
          employee.id === editingEmployee.id
            ? { ...formData, id: employee.id }
            : employee
        )
      );
    } else {
      setEmployees([
        ...employees,
        {
          ...formData,
          id: Date.now(),
        },
      ]);
    }

    closeModal();
  };

  const deleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees(
        employees.filter((employee) => employee.id !== id)
      );
    }
  };
   return (
    <div className="employees">

      <div className="employees-header">

        <h1>
          <FaUsers />
          Employees
        </h1>

        <button
          className="add-btn"
          onClick={openAddModal}
        >
          <FaPlus />
          Add Employee
        </button>

      </div>

      <div className="search-box">

        <FaSearch />

        <input
          type="text"
          placeholder="Search employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="table-container">

        <table>

          <thead>

            <tr>

              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Role</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredEmployees.length > 0 ? (

              filteredEmployees.map((employee) => (

                <tr key={employee.id}>

                  <td>{employee.name}</td>

                  <td>{employee.email}</td>

                  <td>{employee.department}</td>

                  <td>{employee.role}</td>

                  <td>{employee.phone}</td>

                  <td>

                    <span
                      className={
                        employee.status === "Active"
                          ? "status active"
                          : "status inactive"
                      }
                    >
                      {employee.status}
                    </span>

                  </td>

                  <td className="action-buttons">

                    <button
                      className="edit-btn"
                      onClick={() => openEditModal(employee)}
                    >
                      <FaEdit />
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => deleteEmployee(employee.id)}
                    >
                      <FaTrash />
                    </button>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="7"
                  className="no-data"
                >
                  No employees found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>
       {showModal && (
        <div className="modal-overlay">

          <div className="modal">

            <div className="modal-header">

              <h2>
                {editingEmployee ? "Edit Employee" : "Add Employee"}
              </h2>

              <button
                className="close-btn"
                onClick={closeModal}
              >
                <FaTimes />
              </button>

            </div>

            <form onSubmit={handleSubmit}>

              <div className="form-group">

                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  required
                />

              </div>

              <div className="form-group">

                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                />

              </div>

              <div className="form-group">

                <label>Department</label>

                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="Enter department"
                  required
                />

              </div>

              <div className="form-group">

                <label>Role</label>

                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="Enter role"
                  required
                />

              </div>

              <div className="form-group">

                <label>Phone Number</label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+2547XXXXXXXX"
                  required
                />

              </div>

              <div className="form-group">

                <label>Status</label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>

              </div>

              <div className="modal-buttons">

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={closeModal}
                >
                  <FaTimes />
                  Cancel
                </button>

                <button
                  type="submit"
                  className="save-btn"
                >
                  <FaSave />
                  {editingEmployee ? "Update Employee" : "Save Employee"}
                </button>

              </div>

            </form>

          </div>

        </div>
      )}
      </div>
  );
};

export default Employees;