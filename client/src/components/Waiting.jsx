import React from 'react';
import { boundaryTop, boundaryBot } from '../utils/constants';

const Waiting = (props) => {
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
  };
  return (
    <g filter="url(#shadow)">
      <text {...text}>
        {props.text}
      </text>
    </g>
  );
};

export default Waiting;
