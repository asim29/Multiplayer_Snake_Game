const {createSnake} = require('./util/createSnake')

const io = require('socket.io')();

const port = 8000;

// Initial game state
const allSnakes = []
let started = false
const players = []

io.on('connection', function(socket) {
	players.push(socket.id)
	console.log("Client connected")
	console.log(players.length)
	socket.emit("getId", {id: socket.id});

	socket.on('startGame', function(state){
		console.log(socket.id, " Has clicked on start game");
		console.log(state)
		snake = createSnake(socket.id);
		allSnakes.push(snake)
		newState =  {
			...state,
			myid: socket.id,
			gameState: {
				...state.gameState,
				started: true,
				snakes: [
					...state.gameState.snakes,
					snake
				]
			}
		}

		socket.emit('actualStart', newState)
	});


});

io.listen(port);
console.log('listening on port', port);