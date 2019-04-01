import React from 'react';
import PropTypes from 'prop-types';
import { boundaryTop, boundaryBot } from '../utils/constants';

const StartGame = (props) => {
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
