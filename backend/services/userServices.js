const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// Register new user
const registerUserService = async ({ name, email, password, role }) => {
  const exists = await User.findOne({ email });
  if (exists) throw new Error('User already exists');

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed, role: role || 'user' });

  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    token: generateToken(user._id, user.role)
  };
};

// Login user
const loginUserService = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid credentials');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    token: generateToken(user._id, user.role)
  };
};

// Get all users
const getAllUsersService = async () => {
  return await User.find().select("-password");
};

// Delete user
const deleteUserService = async (id) => {
  const user = await User.findByIdAndDelete(id);
  if (!user) throw new Error("User not found");
  return { message: "User deleted successfully" };
};

// Update user role
const updateUserRoleService = async (id, newRole) => {
  const user = await User.findById(id);
  if (!user) throw new Error("User not found");

  user.role = newRole;
  await user.save();
  return { message: "User role updated successfully" };
};

module.exports = {
  registerUserService,
  loginUserService,
  getAllUsersService,
  deleteUserService,
  updateUserRoleService
};