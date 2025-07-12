const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorMiddleware');

// Load environment variables
dotenv.config();
const app = express();


// Get the client origin from environment variable for CORS
const clientOrigin = process.env.CLIENT_ORIGIN;

// Configure CORS to allow requests ONLY from  Vercel frontend
app.use(cors({
  origin: clientOrigin,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true
}));

// Body parser middleware
app.use(express.json());

// HTTP request logger
app.use(morgan('dev'));

// Connect to database
connectDB();

// API routes
app.use('/api/users', userRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handler middleware (should be placed after all routes)
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
console.log('Starting server...');
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));