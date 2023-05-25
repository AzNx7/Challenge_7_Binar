const passport = require('./lib/passport')

const authenticationRouter = require('./routers/authentication')
const roomRouter = require('./routers/room')
const gameplayRouter = require('./routers/gameplay')

const express = require("express")
const app = express()
const port = 7000

app.use(express.urlencoded())//url encoded
app.use(passport.initialize())//passport

app.use(authenticationRouter)
app.use(roomRouter)
app.use(gameplayRouter)

// app.post('/', (req, res) => {
//     console.log("req.headers",req.headers);
//     console.log("req.body",req.body);
//     console.log("req.params",req.params);
//     console.log("req.query",req.query);
    
//     res.send("Send")
// })



app.listen(port, () =>{
    console.log('App is Listening on Port '+ port + "!");
})