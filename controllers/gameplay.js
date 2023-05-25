const { RoomPlayer, Room } = require('../models');

exports.join = async (req, res) => {
    const room =  await Room.findOne ({
        where: {
            id: req.body.roomId,

        },
        include: RoomPlayer
    });

    console.log('ROOM', room)

    if (!room) {
        res.status(404).send('Invalid Room ID!');
        return;
    }

    if(room.RoomPlayers.length ===4){
        res.status.send('Room Is full')
    }
    const find = room.RoomPlayer.find((item) => item.playerId === req.user.id);

    if (find) {
        res.status(500).send('User has joined the game')
    }
    const roomPlayer = await RoomPlayer.create({
        roomId: req.body.roomId,
        playerId: req.user.id,
    })

    res.send(roomPlayer)
}