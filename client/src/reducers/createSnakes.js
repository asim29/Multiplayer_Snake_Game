export default (state) => {
  if ( ! state.gameState.started) return state; // game not running

	const snake = {
	  segments: [
	  	{
	      x:100, 
	      y:-700
	    },
	    {
	    	x:90,
	    	y:-700
	    },
	    {
	    	x:80,
	    	y:-700
	    }],
	  direction: 3,
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