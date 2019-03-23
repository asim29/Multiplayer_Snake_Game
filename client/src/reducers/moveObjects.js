import { moveSpeed } from '../utils/constants';
import checkCollisions from './checkCollisions';

function moveSnake(snake) {
	if(snake.direction === 0){
		snake.position.x += moveSpeed;
	} else if (snake.direction === 1){
		snake.position.y += moveSpeed;
	} else if (snake.direction === 2){
		snake.position.x -= moveSpeed;
	} else if (snake.direction === 3){
		snake.position.y -= moveSpeed;
	}

	return snake
}

function moveObjects(state, action) {
  if (!state.gameState.started) return state;

  const destroyedSnakes = checkCollisions(state.gameState.snakes)

  state.gameState.snakes.map((snake) => (moveSnake(snake)))
  const snakes = state.gameState.snakes.filter(snake => 
  	(destroyedSnakes.indexOf(snake.id)))

  console.log(snakes)
  return {
    ...state,
    gameState: {
      ...state.gameState,
      snakes: [...snakes],
    },
  };
}

export default moveObjects;