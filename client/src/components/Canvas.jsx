import React from 'react';
import PropTypes from 'prop-types';
import { gameHeight } from '../utils/constants';
import Background from './Background';
import Snakebox from './Snakebox';
import Snake from './Snake';
import StartGame from './StartGame';

const Canvas = (props) => {
  const viewBox = [window.innerWidth/-2, 
            -gameHeight, 
            window.innerWidth, 
            gameHeight];

  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>
      <Background />
      <Snakebox />
      { !props.gameState.started &&
        <StartGame onClick={() => props.startGame()} />
      }
      {props.gameState.snakes.map((snake) => (
        <Snake key={snake.id} 
              segments={snake.segments}
              size={snake.size}
              direction={snake.direction}
              id={snake.id+1} />
      ))}
    </svg>
  );
};

Canvas.propTypes = {
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
  }).isRequired,
  startGame: PropTypes.func.isRequired,
};



export default Canvas;