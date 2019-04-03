import React from 'react';
import { gameHeight } from '../utils/constants';
import Background from './Background';
import Snakebox from './Snakebox';
import Snake from './Snake';
import StartGame from './StartGame';
import Waiting from './Waiting';

const Canvas = (props) => {
  const viewBox = [window.innerWidth/-2, 
            -gameHeight, 
            window.innerWidth, 
            gameHeight];

  return (
    <svg
      id="snake-io-canvas"
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
        <StartGame onClick={() => props.loadGame(props.socket)} 
                    text = {props.gameState.text}/>
      }
      {
        props.gameState.started && props.gameState.waiting &&
        <Waiting text = {props.gameState.text} />
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

export default Canvas;