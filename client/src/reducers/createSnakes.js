export default (state) => {
  if ( ! state.gameState.started) return state; // game not running

	const snake = {
	  position: {
	      x:100, 
	      y:-500
	    },
	  size: 3,
	  direction: 0,
	  id: (new Date()).getTime(),
	}
	return {
		...state,
		gameState: {
			...state.gameState,
			snakes: [
				...state.gameState.snakes,
				snake
			],
		}
	};
};