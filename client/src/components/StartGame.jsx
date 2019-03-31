import React from 'react';
import PropTypes from 'prop-types';
import { boundaryTop, boundaryBot, gameWidth } from '../utils/constants';

const StartGame = (props) => {
  const button = {
    x: 0, // half width
    y: (boundaryTop + boundaryBot)/2-50, // minus means up (above 0)
    width: gameWidth,
    height: 200,
    rx: 10, // border radius
    ry: 10, // border radius
    style: {
      fill: 'transparent',
      cursor: 'pointer',
    },
    onClick: props.onClick,
  };

  const text = {
    textAnchor: 'middle', // center
    x: 0, // center relative to X axis
    y: (boundaryTop + boundaryBot)/2, // 150 up
    style: {
      fontFamily: '"Joti One", cursive',
      fontSize: 60,
      fill: '#e3e3e3',
      cursor: 'pointer',
    },
    onClick: props.onClick,
  };
  return (
    <g filter="url(#shadow)">
      <rect {...button} />
      <text {...text}>
        {props.text}
      </text>
    </g>
  );
};

StartGame.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default StartGame;
