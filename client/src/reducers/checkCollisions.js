import { boundaryLeft, boundaryRight,
          boundaryBot, boundaryTop } from '../utils/constants';

const checkCollisions = (snakes) => {
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

export default checkCollisions;