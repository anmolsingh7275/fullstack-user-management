import { createContext, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  async function login(data) {
    try {
      const res = await api.post("/auth/login", data);
      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      console.error("LOGIN ERROR:", err.response?.data || err.message);
      throw err;
    }
  }

  async function registerUser(data) {
    try {
      const res = await api.post("/auth/register", data);
      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      console.error("REGISTER ERROR:", err.response?.data || err.message);
      throw err;
    }
  }

  function logout() {
    setUser(null);
    localStorage.clear();
  }

  return (
    <AuthContext.Provider value={{ user, login, registerUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
