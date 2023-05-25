const { Room } = require('../models');

exports.createRoom = async (req, res) => {
    const room = await Room.create();
    res.send(room);
}