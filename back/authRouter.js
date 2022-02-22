const controller = require('./authController');
const authMiddleware = require('./middleWare/authMiddleware');
const Router = require('express');

const router = new Router();
router.post('/registration', controller.registration);
router.post('/login', controller.login);
router.get('/authorization', authMiddleware, controller.auth);

module.exports = router;
