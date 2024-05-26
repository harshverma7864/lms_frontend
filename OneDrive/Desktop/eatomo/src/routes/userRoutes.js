// userRoutes.js

const express = require('express');
const router = express.Router();
const userQueries = require('../queries/userqueries');

router.get('/', async (req, res) => {
  const users = await userQueries.getAllUsers();
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  const user = await userQueries.getUserById(userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

router.post('/', async (req, res) => {
  const newUser = req.body;
  const userId = await userQueries.createUser(newUser);
  res.status(201).json({ id: userId });
});

router.put('/:id', async (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  await userQueries.updateUser(userId, updatedUser);
  res.json({ message: 'User updated successfully' });
});

router.delete('/:id', async (req, res) => {
  const userId = req.params.id;
  await userQueries.deleteUser(userId);
  res.json({ message: 'User deleted successfully' });
});

module.exports = router;
