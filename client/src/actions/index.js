export const MOVE_OBJECTS = 'MOVE_OBJECTS';
export const START_GAME = 'START_GAME';
export const ADD_SNAKE = 'ADD_SNAKE';
export const GET_ID = 'GET_ID';

export const moveObjects = mousePosition => ({
	type: MOVE_OBJECTS,
	mousePosition,
});

export const startGame = () => ({
	type: START_GAME,
});

export const addSnake = snake => ({
	type: ADD_SNAKE,
	snake,
});

export const getId = id => ({
	type: GET_ID,
	id,
});

// Async Action items
export const getIdFromServer = socket => {
	return (dispatch) => {
		socket.on("getId", function(data){
			console.log("Got id", data.id)
			dispatch(getId(data.id))
		});
	}
}