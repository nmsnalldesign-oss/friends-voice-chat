const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] }
});

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const users = {};
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  socket.on('userJoined', (data) => {
    users[socket.id] = { name: data.name, socketId: socket.id };
    io.emit('onlineUsers', users);
  });
  socket.on('message', (data) => {
    const user = users[socket.id];
    if (user) {
      io.emit('message', {
        text: data.text,
        senderName: user.name,
        senderId: socket.id,
        timestamp: new Date()
      });
    }
  });
  socket.on('disconnect', () => {
    delete users[socket.id];
    io.emit('onlineUsers', users);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log('Server running on port 3000');
  });
});
