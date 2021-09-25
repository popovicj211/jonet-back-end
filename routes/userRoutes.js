const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser
} = require('../controllers/UserController')

router.route('/api/users').get(getAllUsers);
router.route('/api/user/:id').get(getUser);
router.route('/api/user').post(addUser);
router.route('/api/user/:id/edit').get(getUser);
router.route('/api/user/:id').put(updateUser);
router.route('/api/user/:id').delete(deleteUser);


module.exports = router