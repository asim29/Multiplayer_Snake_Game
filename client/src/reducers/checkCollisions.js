import { boundaryLeft, boundaryRight,
          boundaryBot, boundaryTop } from '../utils/constants';

const checkCollisions = (snakes) => {
  const snakesDestroyed = []

  const rectCorrect = 5

  snakes.forEach((snake1) => {
    if(snake1.segments[0].x >= boundaryRight-rectCorrect || 
      snake1.segments[0].x <= boundaryLeft+rectCorrect || 
      snake1.segments[0].y >= boundaryBot-rectCorrect || 
      snake1.segments[0].y <= boundaryTop+rectCorrect){
      snakesDestroyed.push(snake1.id);
    }

  });

  return snakesDestroyed;
};

export default checkCollisions;