export default (state) => {
  if ( ! state.gameState.started) return state; // game not running

  	const x = 500
  	const y = -400-500
	const snake = {
	  segments: [
	  	{
	      x:x, 
	      y:y
	    },
	    {
	    	x:x-10,
	    	y:y
	    },
	    {
	    	x:x-20,
	    	y:y
	    }],
	  direction: 1,
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