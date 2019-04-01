function removeSnake(state, action) {
	const snakeId = action.snakeId;

  const snakes = state.gameState.snakes.filter(snake => (
  	snake.id !== snakeId
  	))

  return {
  	...state,
  	gameState: {
  		...state.gameState,
  		snakes: [...snakes]
  	}
  }
}

export default removeSnake;