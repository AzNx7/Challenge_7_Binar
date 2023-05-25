const express = require('express')
const router = express.Router()

const authenticationController = require('../controllers/authentication')

// Post/login
//untuk login pemain
router.post('/login', authenticationController.login);
// post registration
// untukmregistrasi pemain

router.post('/registration',authenticationController.registration)


//exports

module.exports = router;
