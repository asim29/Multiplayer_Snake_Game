import React from 'react';
import PropTypes from 'prop-types';
import SnakeSegment from './SnakeSegment';

const Snake = (props) => {
	const snake = []
	for(let i = 0; i < props.size; i++){
		let snakePosition = {};
		let id = props.id+i;
		if(props.direction === 0){
			snakePosition = {
				x: props.position.x - i*10,
				y: props.position.y
			}
		}
		else if(props.direction === 1){
			snakePosition = {
				x: props.position.x,
				y: props.position.y - i*10
			}	
		}
		else if(props.direction === 2){
			snakePosition = {
				x: props.position.x + i*10,
				y: props.position.y
			}	
		}
		else if(props.direction === 3){
			snakePosition = {
				x: props.position.x,
				y: props.position.y + i*10
			}	
		}
		snake.push(<SnakeSegment key={id} position={snakePosition} />)
	}
	return snake
}


Snake.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  direction: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};


export default Snake;