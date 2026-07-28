import React from "react";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>

      <p>
        <strong>Email:</strong> {employee.email}
      </p>

      <p>
        <strong>Department:</strong> {employee.department}
      </p>

      <p>
        <strong>Role:</strong> {employee.role}
      </p>

      <p>
        <strong>Status:</strong> {employee.status}
      </p>
    </div>
  );
};

export default EmployeeCard;