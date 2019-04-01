const {createSnake} = require('./util/createSnake')

const io = require('socket.io')();

const port = 8000;

// Initial game state
let allSnakes = []
let started = false
let players = []

let gameState = {
	started: false,
	waiting: false,
	text: null,
	snakes: [...allSnakes]
}

io.on('connection', function(socket) {
	players.push(socket)
	console.log("Client connected")
	console.log("Number of players:", players.length)
	socket.emit("getId", {id: socket.id});

	socket.on('loadGame', function(state){
		console.log(socket.id, " Has clicked on start game");
		snake = createSnake(socket.id);
		allSnakes.push(snake)
		gameState.snakes = allSnakes;

		if(players.length > 1 && allSnakes.length === players.length){
			console.log("Starting Game")
			gameState = {
				started: true,
				waiting: false,
				text: null,
				snakes: [
					...allSnakes,
				]
			};
			started = true;
			console.log(gameState)
			io.emit('updateGameState', gameState);
		} else {
			gameState = {
				started: true,
				waiting: true,
				text: "Waiting for other players to connect",
				snakes: [],
			}
			console.log(gameState)
			socket.emit('updateGameState', gameState);
		}

	});

	socket.on('turnSnake', function(data){
		const key = data.key;
		const newGameState = data.gameState
		let direction = -1;
		if(started === true){
			if(key === 'ArrowRight'){
				direction = 0;
			} else if (key === 'ArrowDown'){
				direction = 1;
			} else if (key === 'ArrowLeft'){
				direction = 2;
			} else if (key === 'ArrowUp'){
				direction = 3;
			}
			const newSnakes = newGameState.snakes
			newSnakes.forEach(snake => {
				if(snake.id === socket.id){
					if(direction !== -1){
						snake.direction = direction;
					}
				}
			});
			allSnakes = [...newSnakes];
			gameState = {
				started: true,
				waiting: false,
				snakes: [...allSnakes],
			}
			io.emit('updateGameState', gameState)
		}
	});

	socket.on('snakesDestroyed', function(data){
		gameState = data.gameState;
		const destroyedSnakes = data.snakes;

		const newSnakes = gameState.snakes.filter(snake =>
			(destroyedSnakes.indexOf(snake.id)))
		allSnakes = newSnakes;

		const playersLeft = players.filter(player =>
			(destroyedSnakes.indexOf(player.id)))
		players = playersLeft
		console.log("In snake destroyed")
		console.log("Snakes left are: ", allSnakes.length)
		console.log("Players left are: ", players.length)
		if(playersLeft.length === 1){
			gameStateWinner = {
			  waiting: false,
			  started: false,
			  snakes: [],
			  text: "You have won! Close and reopen to start another game!",
			};
			gameStateLoser = {
				...gameStateWinner,
				text: "You lost. Close and reopen to start game!",
			}
			playersLeft[0].emit('updateGameState', gameStateWinner);
			playersLeft[0].broadcast.emit('updateGameState', gameStateLoser);
			started = false;
			gameState = {
				waiting: false,
				started: false,
				snakes: [],
				text: "Tap to start",	
			}
		} else if (playersLeft.length === 0){
			allSnakes = []
			players = []
			started = false;
			gameState = {
				started: false,
				waiting: false,
				snakes: [],
				text: "Everyone lost. Tap to start another game",
			}
		} else {
			gameState = {
				...gameState,
				snakes: [...newSnakes]
			}
			io.emit('updateGameState', gameState)
		}

	});

	socket.on('disconnect', function() {
		players = players.filter(player => player.id !== socket.id)
		allSnakes = allSnakes.filter(snakes => snakes.id !== socket.id)
		if(players.length > 0){
			gameState = {
				started: true,
				waiting: false,
				snakes: [...allSnakes]
			}
		} else {
			allSnakes = [];
			players = [];
			started = false;
			gameState = {
				started: false,
				waiting: false,
				text: "Tap to start",
				snakes: [],
			}
			console.log("Game restarting")
			console.log(gameState)
		}
		io.emit('updateGameState', gameState)
	});

});

io.listen(port);
console.log('listening on port', port);