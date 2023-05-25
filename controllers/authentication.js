const {User} = require('../models');
const jwt = require('jsonwebtoken');


exports.login = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                userName: req.body.userName,
                password: req.body.password,
            },
        });

        if (user) {
            const payload = { uid: user.id };
            const secret = "password";

            const token = jwt.sign(payload, secret)
            res.json({
                accessToken: token,
            })
        } else {
            res.status(401).send('Invalid Login!')
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};

exports.registration = async (req, res) => {
    console.log('req.body', req.body);

    const user = await User.create({
        name: req.body.name,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    })

    res.send(user);
}