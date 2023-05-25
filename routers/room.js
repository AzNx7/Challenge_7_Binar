//post room
//untuk membuat room bermain
const express = require('express')
const router = express.Router()

const roomController = require('../controllers/room');
const passport = require('../lib/passport');

router.post('/room', passport.authenticate('jwt',
    { session: false }),
    roomController.createRoom
    );



//exports

module.exports = router;