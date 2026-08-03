import { useState } from "react";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

export default function AdminPanel() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("adminToken"));

  return loggedIn ? (
    <AdminDashboard />
  ) : (
    <AdminLogin onLoginSuccess={() => setLoggedIn(true)} />
  );
}