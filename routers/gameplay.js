const express = require('express')
const router = express.Router()

const gameplayController = require('../controllers/gameplay');
const passport = require('../lib/passport');

router.post(
    '/join',
    passport.authenticate('jwt',
    { session: false }),
    gameplayController.join
    );



//exports

module.exports = router;