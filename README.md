# Chess Game

## Table of contents

- [Description](#description)
- [Presentation](#presentation)
- [Technology ](#technology)
- [Folder Structure](#folder-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)

## Description

Chess Game is a multiplayer chess application designed to provide an interactive and immersive gaming experience via a web browser. The project uses ReactJS on the frontend and Node.js on the backend.

#### Presentation

<p align="center"> 
  <img src="/frontend/public/assets/chessgame-presentation.PNG"  alt="Queue"/>
</p>

## Technology

### Frontend

- React
- React-DnD
- CSS Grid
- CSS

### Backend

- Node.js
- Express.js

## Folder Structure

#### Frontend

```
src
├── public
│   ├── assets
├── src
│   ├── components
│       ├── game.actions.ts
```

#### Backend

```
server

├── pieces
├── ChessGame.js
├── server.js

```

## Prerequisites

#### Frontend and Backend

Make sure you have Node.js and npm installed on your machine.

### Clone the Repository

```bash
git clone this project
cd chess-game
```

Start the frontend server:

```bash
cd frontend
npm start
```

Start the backend server:

```bash
cd backend
node server.js
```
