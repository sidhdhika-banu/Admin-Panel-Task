import React from 'react';
import '../style/UserDashboard.css';
import { useNavigate } from 'react-router-dom'; // ✅ Make sure routing works
import { toast } from 'react-toastify'; // ✅ Add toast for feedback

export default function UserDashboard() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    toast.info('Logged out');
    navigate('/');
  };

  return (
    <div className="user-dashboard-container">
      <div className="user-dashboard-box">
        <h2>Welcome, {user?.name || 'User'}!</h2>
        <p>This is the User Dashboard.</p>
        <button className="btn-logout" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}