import React from 'react';
import PropTypes from 'prop-types';

const SnakeSegment = (props) => {
  const style = {
    fill: '#ffffff',
    stroke: '#000000',
    strokeWidth: '1px'
  };

  return (
  	<rect
			style={style}
  		x={props.position.x}
  		y={props.position.y}
  		rx="2"
  		ry="2"
  		width="10"
  		height="10"
  	/>
  );
};

SnakeSegment.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default SnakeSegment;