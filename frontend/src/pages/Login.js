import React, { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../style/login.css';
import { toast } from 'react-toastify'; // ✅ Add this

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post('/users/login', { email, password });
      localStorage.setItem('user', JSON.stringify(res.data));

      toast.success('Login successful!'); // 🎉 Feedback for users

      if (res.data.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/user');
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed'); // 🚨 Replaces alert
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;