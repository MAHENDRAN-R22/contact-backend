const express = require("express");
const {registerUser,registerLogin,registerCurrent} = require('./controller/usercontroller');
const validateToken = require('../middleware/validatetokenhandler')

const router = express.Router();

router.post('/register',registerUser);

router.post('/login',registerLogin);

router.get('/current',validateToken,registerCurrent);

module.exports = router;