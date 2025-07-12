const { validationResult } = require('express-validator');
const {
  registerUserService,
  loginUserService,
  getAllUsersService,
  deleteUserService,
  updateUserRoleService
} = require('../services/userServices');
const logger = require('../utils/logger');

// @route POST /api/users/register
const registerUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const userData = await registerUserService(req.body);
    res.status(201).json(userData);
  } catch (err) {
    logger.error(`Register error: ${err.message}`);
    next(err);
  }
};

// @route POST /api/users/login
const loginUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const userData = await loginUserService(req.body);
    res.status(200).json(userData);
  } catch (err) {
    logger.error(`Login error: ${err.message}`);
    next(err);
  }
};

// @route GET /api/users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersService();
    res.status(200).json(users);
  } catch (err) {
    logger.error(`Get all users error: ${err.message}`);
    next(err);
  }
};

// @route DELETE /api/users/:id
const deleteUser = async (req, res, next) => {
  try {
    const result = await deleteUserService(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    logger.error(`Delete user error: ${err.message}`);
    next(err);
  }
};

// @route PUT /api/users/:id/role
const updateUserRole = async (req, res, next) => {
  try {
    const result = await updateUserRoleService(req.params.id, req.body.role);
    res.status(200).json(result);
  } catch (err) {
    logger.error(`Update role error: ${err.message}`);
    next(err);
  }
};

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  deleteUser,
  updateUserRole
};