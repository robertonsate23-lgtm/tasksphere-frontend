import React, { useEffect, useState } from "react";
import {
    FaChartBar,
    FaUsers,
    FaProjectDiagram,
    FaCalendarCheck,
    FaFilePdf,
    FaFileExcel,
    FaFileCsv,
    FaSearch
} from "react-icons/fa";

import api from "../services/api";
import "../styles/Reports.css";

const Reports = () => {

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [stats, setStats] = useState({
        users: 0,
        projects: 0,
        attendance: 0,
        leave_requests: 0
    });

    const [users, setUsers] = useState([]);

    const [projects, setProjects] = useState([]);

    const [attendance, setAttendance] = useState([]);

    const [leaves, setLeaves] = useState([]);

    useEffect(() => {

        loadReports();

    }, []);

    const loadReports = async () => {

        try {

            setLoading(true);

            const [
                statsRes,
                usersRes,
                projectsRes,
                attendanceRes,
                leavesRes
            ] = await Promise.all([

                api.get("/reports"),

                api.get("/reports/users"),

                api.get("/reports/projects"),

                api.get("/reports/attendance"),

                api.get("/reports/leaves"),

                api.get("/reports/pdf"),

                api.get("/reports/excel"),

                api.get("/reports/csv")

            ]);

            setStats(statsRes.data);

            setUsers(usersRes.data);

            setProjects(projectsRes.data);

            setAttendance(attendanceRes.data);

            setLeaves(leavesRes.data);

            setError("");

        } catch (err) {

            console.error(err);

            if (err.response) {

                setError(err.response.data.msg || "Failed to load reports.");

            } else {

                setError("Cannot connect to the backend.");

            }

        } finally {

            setLoading(false);

        }

    };

    const download = async (endpoint, filename) => {

        try {

            const response = await api.get(endpoint, {

                responseType: "blob"

            });

            const url = window.URL.createObjectURL(

                new Blob([response.data])

            );

            const link = document.createElement("a");

            link.href = url;

            link.download = filename;

            document.body.appendChild(link);

            link.click();

            link.remove();

        } catch (err) {

            alert("Download failed.");

        }

    };

    const downloadPDF = () => {

        download("/reports/pdf", "TaskSphere_Report.pdf");

    };

    const downloadExcel = () => {

        download("/reports/excel", "TaskSphere_Report.xlsx");

    };

    const downloadCSV = () => {

        download("/reports/csv", "TaskSphere_Report.csv");

    };

    if (loading) {

        return (

            <div className="loading">

                Loading reports...

            </div>

        );

    }

    if (error) {

        return (

            <div className="error">

                {error}

            </div>

        );

    }
    return (

        <div className="reports-container">

            <div className="reports-header">

                <h1>

                    <FaChartBar />

                    Reports Dashboard

                </h1>

                <div className="report-actions">

                    <button
                        className="pdf-btn"
                        onClick={downloadPDF}
                    >
                        <FaFilePdf />
                        PDF
                    </button>

                    <button
                        className="excel-btn"
                        onClick={downloadExcel}
                    >
                        <FaFileExcel />
                        Excel
                    </button>

                    <button
                        className="csv-btn"
                        onClick={downloadCSV}
                    >
                        <FaFileCsv />
                        CSV
                    </button>

                </div>

            </div>

            <div className="search-container">

                <FaSearch />

                <input
                    type="text"
                    placeholder="Search reports..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />

            </div>

            <div className="stats-grid">

                <div className="stat-card">

                    <FaUsers className="stat-icon"/>

                    <h3>Employees</h3>

                    <h2>{stats.users}</h2>

                </div>

                <div className="stat-card">

                    <FaProjectDiagram className="stat-icon"/>

                    <h3>Projects</h3>

                    <h2>{stats.projects}</h2>

                </div>

                <div className="stat-card">

                    <FaCalendarCheck className="stat-icon"/>

                    <h3>Attendance</h3>

                    <h2>{stats.attendance}</h2>

                </div>

                <div className="stat-card">

                    <FaCalendarCheck className="stat-icon"/>

                    <h3>Leave Requests</h3>

                    <h2>{stats.leave_requests}</h2>

                </div>

            </div>

            <div className="table-section">

                <h2>Employees Report</h2>

                <table>

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Name</th>

                            <th>Email</th>

                            <th>Role</th>

                        </tr>

                    </thead>

                    <tbody>

                        {users
                            .filter((user) =>
                                `${user.first_name} ${user.last_name}`
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                            )
                            .map((user) => (

                                <tr key={user.id}>

                                    <td>{user.id}</td>

                                    <td>

                                        {user.first_name} {user.last_name}

                                    </td>

                                    <td>{user.email}</td>

                                    <td>{user.role}</td>

                                </tr>

                            ))}

                    </tbody>

                </table>

            </div>

            <div className="table-section">

                <h2>Projects Report</h2>

                <table>

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Name</th>

                            <th>Status</th>

                            <th>Priority</th>

                        </tr>

                    </thead>

                    <tbody>

                        {projects.map((project) => (

                            <tr key={project.id}>

                                <td>{project.id}</td>

                                <td>{project.name}</td>

                                <td>{project.status}</td>

                                <td>{project.priority}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            <div className="table-section">

                <h2>Attendance Report</h2>

                <table>

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Employee</th>

                            <th>Date</th>

                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {attendance.map((record) => (

                            <tr key={record.id}>

                                <td>{record.id}</td>

                                <td>{record.employee}</td>

                                <td>{record.date}</td>

                                <td>{record.status}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>
            <div className="table-section">

                <h2>Leave Requests Report</h2>

                <table>

                    <thead>

                        <tr>

                            <th>ID</th>
                            <th>Employee</th>
                            <th>Leave Type</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {leaves.map((leave) => (

                            <tr key={leave.id}>

                                <td>{leave.id}</td>

                                <td>{leave.employee}</td>

                                <td>{leave.leave_type}</td>

                                <td>{leave.start_date}</td>

                                <td>{leave.end_date}</td>

                                <td>

                                    <span
                                        className={`status ${leave.status.toLowerCase()}`}
                                    >
                                        {leave.status}
                                    </span>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default Reports;