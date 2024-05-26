// userQueries.js

const db = require('../dbconnect');
const bcrypt = require('bcrypt');


module.exports = {
  getAllUsers: async () => {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
  },

  getUserById: async (userId) => {
    const [rows] = await db.query('SELECT * FROM users WHERE userid = ?', [userId]);
    return rows[0];
  },

  createUser: async (user) => {
    // Hash the password before inserting into the database
    const hashedPassword = await bcrypt.hash(user.password, 10);

    // Create a new user object with the hashed password
    const newUser = { ...user, password: hashedPassword };

    const [result] = await db.query('INSERT INTO users SET ?', [newUser]);
    return result.insertId;
  },

  updateUser: async (userId, user) => {
    await db.query('UPDATE users SET ? WHERE userid = ?', [user, userId]);
  },

  deleteUser: async (userId) => {
    await db.query('DELETE FROM users WHERE userid = ?', [userId]);
  },
};
