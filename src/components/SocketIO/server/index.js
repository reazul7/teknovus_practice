const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const port = 4000;
const { Server } = require("socket.io");
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    // emit new event named 'join_room'
    socket.on("join_room", (data) => {
        socket.join(data);  //room join
        console.log(`User ID: ${socket.id}; Joined Room: ${data}`);
    });

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
        console.log(data);
    });

    // disconnect user
    socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

server.listen(port, () => {
    console.log(`Server running on ${port}`);
});
