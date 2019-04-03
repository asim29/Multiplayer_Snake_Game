export const MOVE_OBJECTS = 'MOVE_OBJECTS';
export const LOAD_GAME = 'LOAD_GAME';
export const ADD_SNAKE = 'ADD_SNAKE';
export const GET_ID = 'GET_ID';
export const REMOVE_SNAKE = 'REMOVE_SNAKE';
export const TURN_SNAKE = 'TURN_SNAKE';
export const UPDATE_GAME_STATE = 'UPDATE_GAME_STATE';

export const moveObjects = socket => ({
	type: MOVE_OBJECTS,
	socket,
});

export const loadGame = socket => ({
	type: LOAD_GAME,
	socket,
});

export const addSnake = snake => ({
	type: ADD_SNAKE,
	snake,
});

export const getId = id => ({
	type: GET_ID,
	id,
});

export const removeSnake = snakeId => ({
	type: REMOVE_SNAKE,
	snakeId,
});

export const turnSnake = (key, socket) => ({
	type: TURN_SNAKE,
	key,
	socket,
});

export const updateGameState = gameState => ({
	type: UPDATE_GAME_STATE,
	gameState,
});

// Async Action items
export const getIdFromServer = socket => {
	return (dispatch) => {
		socket.on("getId", function(data){
			dispatch(getId(data.id))
		});
	}
}

export const getGameStateFromServer = socket => {
	return (dispatch) => {
		socket.on("updateGameState", function(data){
			dispatch(updateGameState(data))
		})
	}
}