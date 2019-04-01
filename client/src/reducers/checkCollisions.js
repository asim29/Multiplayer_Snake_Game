import { boundaryLeft, boundaryRight,
          boundaryBot, boundaryTop } from '../utils/constants';

const checkOverlap = (rectA, rectB) => (
  rectA.x1 < rectB.x2 && rectA.x2 > rectB.x1 &&
  rectA.y1 < rectB.y2 && rectA.y2 > rectB.y1
);


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
    const head = snake.segments[0];
    const headRect = {
      x1: head.x,
      y1: head.y,
      x2: head.x + 12,
      y2: head.y + 12,
    };
    snakes.forEach((otherSnake) => {
      if(otherSnake.id !== snake.id){
        const otherHead = otherSnake.segments[0];
        const headRect2 = {
          x1: otherHead.x,
          y1: otherHead.y,
          x2: otherHead.x + 12,
          y2: otherHead.y + 12,
        };
        if(checkOverlap(headRect, headRect2)){
          snakesDestroyed.push(snake.id);
          snakesDestroyed.push(otherSnake.id);
        } 
        else {
          const otherSegments = otherSnake.segments.slice(1,)
          otherSegments.forEach((seg) => {
            const rect2 = {
              x1: seg.x,
              y1: seg.y,
              x2: seg.x + 12,
              y2: seg.y + 12,
            }
            if(checkOverlap(headRect, rect2)){
              snakesDestroyed.push(otherSnake.id);
            }
          })
        }
      }
    })

  });

  return snakesDestroyed;
};

export default checkCollisions;