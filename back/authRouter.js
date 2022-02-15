const controller = require('./authController');

const Router = require('express');

const router = new Router();
router.post('/registration', controller.registration);
router.post('/login', controller.login);
router.get('/users', controller.users);

module.exports = router;
