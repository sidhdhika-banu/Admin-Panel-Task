import React, { useEffect, useState } from 'react';
import API from '../services/api';
import '../style/AdminDashboard.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const res = await API.get('/users');
      setUsers(res.data);
    } catch (err) {
      toast.error('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await API.delete(`/users/${id}`);
        toast.success('User deleted successfully');
        fetchUsers();
      } catch (err) {
        toast.error('Delete failed');
      }
    }
  };

  const updateRole = async (id, currentRole) => {
    const newRole = currentRole === 'admin' ? 'user' : 'admin';
    try {
      await API.put(`/users/${id}/role`, { role: newRole });
      toast.info(`Role updated to ${newRole}`);
      fetchUsers();
    } catch (err) {
      toast.error('Role update failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    toast.info('Logged out');
    navigate('/');
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (users.length === 0) return <p>No users found.</p>;

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Admin Dashboard</h2>
        <p className="dashboard-tagline">
          Take control. Manage users. Maintain order. You’re the boss here.
        </p>

        <button className="btn-logout" onClick={logout}>Logout</button>
      </div>

      <div className="table-wrapper">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Change Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>
                  <button className="btn-role" onClick={() => updateRole(u._id, u.role)}>
                    Change to {u.role === 'admin' ? 'user' : 'admin'}
                  </button>
                </td>
                <td>
                  <button className="btn-delete" onClick={() => deleteUser(u._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}