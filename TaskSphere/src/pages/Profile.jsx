import React, { useState } from "react";
import {
  FaCalendarCheck,
  FaSearch,
} from "react-icons/fa";

import "../styles/Attendance.css";

const Attendance = () => {
  const [search, setSearch] = useState("");

  const attendance = [
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
      employee: "John Doe",
      date: "2026-07-18",
      checkIn: "08:20 AM",
      checkOut: "05:10 PM",
      status: "Late",
    },
    {
      id: 3,
      employee: "Mary Jane",
      date: "2026-07-18",
      checkIn: "--",
      checkOut: "--",
      status: "Absent",
    },
  ];

  const filteredAttendance = attendance.filter((record) =>
    record.employee.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="attendance">

      <div className="attendance-header">
        <h1>
          <FaCalendarCheck />
          Attendance
        </h1>
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

      <table>

        <thead>
          <tr>
            <th>Employee</th>
            <th>Date</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {filteredAttendance.map((record) => (
            <tr key={record.id}>
              <td>{record.employee}</td>
              <td>{record.date}</td>
              <td>{record.checkIn}</td>
              <td>{record.checkOut}</td>
              <td>{record.status}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default Attendance;