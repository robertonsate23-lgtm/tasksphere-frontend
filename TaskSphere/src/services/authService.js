import api from "./api";

export const login = async (credentials) => {
  const response = await api.post("/login", credentials);
  return response.data;
};

export const register = async (user) => {
  const response = await api.post("/register", user);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};