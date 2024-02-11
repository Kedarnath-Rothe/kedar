const express = require('express');
const controller = require('../controllers/admin-controller');
const authMiddleware = require('../middlewares/auth-middleware');

const router = express.Router();



router.route('/users').get(authMiddleware, controller.getAllUsers);

router.route('/users/:id').get(authMiddleware, controller.getUserById);

router.route('/users/update/:id').patch(authMiddleware, controller.updateUserById);

router.route('/users/delete/:id').delete(authMiddleware, controller.deleteUserById);

router.route('/contacts').get(authMiddleware, controller.getAllContacts);

router.route('/contacts/delete/:id').delete(authMiddleware, controller.deleteContactById);

module.exports = router;