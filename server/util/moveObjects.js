gameWidth = 1400;
gameHeight = 1200;
boundaryLeft = 600-gameWidth;
boundaryRight = gameWidth-600;
boundaryTop = 100-gameHeight;
boundaryBot = -100;
moveSpeed = 10;

function checkCollisions(snakes) {
  const snakesDestroyed = []

  const rectCorrect = 5

  snakes.forEach((snake) => {
    if(snake.segments[0].x >= boundaryRight-rectCorrect || 
      snake.segments[0].x <= boundaryLeft+rectCorrect || 
      snake.segments[0].y >= boundaryBot-rectCorrect || 
      snake.segments[0].y <= boundaryTop+rectCorrect){
      snakesDestroyed.push(snake.id);
    }
  });

  return snakesDestroyed;
};

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

function moveObjects(gameState) {
  if (!gameState.started) return gameState;

  const destroyedSnakes = checkCollisions(gameState.snakes)

  gameState.snakes.map((snake) => (moveSnake(snake)))
  const snakes = gameState.snakes.filter(snake =>
    (destroyedSnakes.indexOf(snake.id)))
  
  return {
      ...gameState,
      snakes: [...snakes],
  };
}

module.exports.moveObjects = moveObjects;