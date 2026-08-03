import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

export default function AuthPage() {
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate("/"); // send them back to the homepage after logging in
  };

  return showLogin ? (
    <Login onSwitchToSignup={() => setShowLogin(false)} onLoginSuccess={handleLoginSuccess} />
  ) : (
    <Signup onSwitchToLogin={() => setShowLogin(true)} />
  );
}