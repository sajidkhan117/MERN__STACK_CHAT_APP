const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send("api is Ruining")
});

app.get('/api/chat', (req, res) => {
    res.send(chats)
})

app.get('/api/chat/:id', (req, res) => {
    // console.log(req.param.id);
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat)
})

const Port = process.env.PORT || 5000;

app.listen(5000, console.log(`Server Started on PORT ${Port}`)); 
