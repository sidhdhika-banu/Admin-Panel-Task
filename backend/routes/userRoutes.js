const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const {
  registerUser,
  loginUser,
  getAllUsers,
  deleteUser,
  updateUserRole
} = require('../controllers/userController');

const { protect, admin } = require('../middleware/authMiddleware');

// Validation middleware for register and login
const registerValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
];

const loginValidation = [
  body('email').isEmail().withMessage('Valid email required'),
  body('password').notEmpty().withMessage('Password is required')
];

// Routes
router.post('/register', registerValidation, registerUser);
router.post('/login', loginValidation, loginUser);

router.get('/', protect, admin, getAllUsers);
router.delete('/:id', protect, admin, deleteUser);
router.put('/:id/role', protect, admin, updateUserRole);

module.exports = router;