import axios from 'axios';

const API = axios.create({
  baseURL: 'https://admin-panel-task-production.up.railway.app/api', // Updated base URL
});

// Add token to headers
API.interceptors.request.use((req) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user?.token) {
    req.headers.Authorization = `Bearer ${user.token}`;
  }
  return req;
});

export default API;