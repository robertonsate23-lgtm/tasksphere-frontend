import React, { useState } from "react";
import {
  FaCalendarCheck,
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
  FaClock,
  FaTimes,
  FaSave,
} from "react-icons/fa";

import "../styles/Attendance.css";

const Attendance = () => {
  const [search, setSearch] = useState("");

  const [attendance, setAttendance] = useState([
    {
      id: 1,
      employee: "Robert Onsate",
      date: "2026-07-18",
      checkIn: "08:00 AM",
      checkOut: "05:00 PM",
      status: "Present",
    },
    {
      id: 2,
      employee: "Mary Jane",
      date: "2026-07-18",
      checkIn: "08:20 AM",
      checkOut: "05:10 PM",
      status: "Late",
    },
    {
      id: 3,
      employee: "John Doe",
      date: "2026-07-18",
      checkIn: "--",
      checkOut: "--",
      status: "Absent",
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const [editingAttendance, setEditingAttendance] = useState(null);

  const [formData, setFormData] = useState({
    employee: "",
    date: "",
    checkIn: "",
    checkOut: "",
    status: "Present",
  });

  const filteredAttendance = attendance.filter(
    (record) =>
      record.employee.toLowerCase().includes(search.toLowerCase()) ||
      record.status.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const openAddModal = () => {
    setEditingAttendance(null);

    setFormData({
      employee: "",
      date: "",
      checkIn: "",
      checkOut: "",
      status: "Present",
    });

    setShowModal(true);
  };

  const openEditModal = (record) => {
    setEditingAttendance(record);
    setFormData(record);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingAttendance(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.employee || !formData.date) {
      alert("Please complete all required fields.");
      return;
    }

    if (editingAttendance) {
      setAttendance(
        attendance.map((record) =>
          record.id === editingAttendance.id
            ? {
                ...formData,
                id: editingAttendance.id,
              }
            : record
        )
      );
    } else {
      setAttendance([
        ...attendance,
        {
          ...formData,
          id: Date.now(),
        },
      ]);
    }

    closeModal();
  };

  const deleteAttendance = (id) => {
    if (window.confirm("Delete this attendance record?")) {
      setAttendance(
        attendance.filter((record) => record.id !== id)
      );
    }
  };
    return (
    <div className="attendance">

      <div className="attendance-header">

        <h1>
          <FaCalendarCheck />
          Attendance
        </h1>

        <button
          className="add-btn"
          onClick={openAddModal}
        >
          <FaPlus />
          Add Attendance
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

              <th>Employee</th>

              <th>Date</th>

              <th>Check In</th>

              <th>Check Out</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredAttendance.length > 0 ? (

              filteredAttendance.map((record) => (

                <tr key={record.id}>

                  <td>{record.employee}</td>

                  <td>{record.date}</td>

                  <td>
                    <FaClock /> {record.checkIn}
                  </td>

                  <td>
                    <FaClock /> {record.checkOut}
                  </td>

                  <td>

                    <span
                      className={`status ${record.status
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {record.status}
                    </span>

                  </td>

                  <td>

                    <button
                      className="edit-btn"
                      onClick={() => openEditModal(record)}
                    >
                      <FaEdit />
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => deleteAttendance(record.id)}
                    >
                      <FaTrash />
                    </button>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="6"
                  className="no-data"
                >
                  No attendance records found.
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
                {editingAttendance
                  ? "Edit Attendance"
                  : "Add Attendance"}
              </h2>

              <button
                className="close-btn"
                onClick={closeModal}
              >
                <FaTimes />
              </button>

            </div>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="employee"
                placeholder="Employee Name"
                value={formData.employee}
                onChange={handleChange}
                required
              />

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />

              <label>Check In Time</label>

              <input
                type="time"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
              />

              <label>Check Out Time</label>

              <input
                type="time"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
              />

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Present">Present</option>
                <option value="Late">Late</option>
                <option value="Absent">Absent</option>
                <option value="Leave">Leave</option>
              </select>

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
                  {editingAttendance
                    ? "Update Attendance"
                    : "Save Attendance"}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}
    </div>
  );
};

export default Attendance;