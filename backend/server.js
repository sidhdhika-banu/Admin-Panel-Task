const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan'); // ✅ Import morgan
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorMiddleware'); // ✅ Import error handler

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev')); // ✅ Log incoming requests

// Connect to DB
connectDB();

// Routes
app.use('/api/users', userRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handler - should come AFTER routes
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
console.log('Starting server...');
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));