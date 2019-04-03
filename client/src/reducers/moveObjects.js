import { moveSpeed } from '../utils/constants';
import checkCollisions from './checkCollisions';

function moveSnake(snake) {
  const newSegments = [];

  if(snake.direction === 0){
    const position = {
      x: snake.segments[0].x + moveSpeed,
      y: snake.segments[0].y
    }
    newSegments.push(position)
  } else if (snake.direction === 1){
      const position = {
      x: snake.segments[0].x,
      y: snake.segments[0].y + moveSpeed,
    }
    newSegments.push(position)
  } else if (snake.direction === 2){
      const position = {
        x: snake.segments[0].x - moveSpeed,
        y: snake.segments[0].y,
    }
    newSegments.push(position)
  } else if (snake.direction === 3){
      const position = {
      x: snake.segments[0].x,
      y: snake.segments[0].y - moveSpeed,
    }
    newSegments.push(position)
  }

  snake.segments.slice(0, -1).forEach((segment) => {
    newSegments.push(segment)
  })

  snake.segments = newSegments

	return snake;
}

function moveObjects(state, socket) {
  if (!state.gameState.started) return state;


  const destroyedSnakes = checkCollisions(state.gameState.snakes)

  if(destroyedSnakes.length > 0){
    socket.emit('snakesDestroyed', {gameState: state.gameState, snakes: destroyedSnakes});
  }

  state.gameState.snakes.map((snake) => (moveSnake(snake)))
  const snakes = state.gameState.snakes.filter(snake =>
    (destroyedSnakes.indexOf(snake.id)))
  return {
    ...state,
    gameState: {
      ...state.gameState,
      snakes: [...snakes],
    },
  };
}

export default moveObjects;