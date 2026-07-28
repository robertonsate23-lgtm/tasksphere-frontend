import api from "./api";

export const getDashboardStats = async () => {
    const response = await api.get("/reports");
    return response.data;
};

export const getUsersReport = async () => {
    const response = await api.get("/reports/users");
    return response.data;
};

export const getProjectsReport = async () => {
    const response = await api.get("/reports/projects");
    return response.data;
};

export const getAttendanceReport = async () => {
    const response = await api.get("/reports/attendance");
    return response.data;
};

export const getLeaveReport = async () => {
    const response = await api.get("/reports/leaves");
    return response.data;
};

export const downloadCSV = () =>
    window.open("http://127.0.0.1:5000/api/reports/csv");

export const downloadExcel = () =>
    window.open("http://127.0.0.1:5000/api/reports/excel");

export const downloadPDF = () =>
    window.open("http://127.0.0.1:5000/api/reports/pdf");