# Friends Voice Chat

Discord-like voice chat for small friend groups. Minimal white UI, text + voice messaging, real-time user presence.

## Features

- Web app (works in browser)
- Text chat in real-time  
- Voice calls with WebRTC
- Online friends list
- Minimal white design
- No lag for 5 friends

## Quick Start

### 1. Install

```bash
git clone https://github.com/nmsnalldesign-oss/friends-voice-chat.git
cd friends-voice-chat
npm install
```

### 2. Run Server

```bash
npm start
```

You'll see: `Server running on port 3000`

### 3. Open Browser

Go to `http://localhost:3000`

### 4. Share With Friends

1. Find your IP (cmd: `ipconfig`)
2. Send them: `http://YOUR_IP:3000`
3. They enter name → Done!

## How to Use

1. Enter your name and click "Войти"
2. Type messages
3. See online friends list

## Tech

- Node.js + Express
- Socket.io for real-time
- HTML5 + Vanilla JS
- Clean white CSS

MIT License
