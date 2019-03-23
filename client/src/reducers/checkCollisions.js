import { boundaryLeft, boundaryRight,
          boundaryBot, boundaryTop } from '../utils/constants';

const checkCollisions = (snakes) => {
  const snakesDestroyed = []

  const rectCorrect = 5

  snakes.forEach((snake) => {
    if(snake.position.x >= boundaryRight-rectCorrect || 
      snake.position.x <= boundaryLeft+rectCorrect || 
      snake.position.y >= boundaryBot-rectCorrect || 
      snake.position.y <= boundaryTop+rectCorrect){
      snakesDestroyed.push(snake.id);
    }
  });

  return snakesDestroyed;
};

export default checkCollisions;