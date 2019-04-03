import React from 'react';
import SnakeSegment from './SnakeSegment';

const Snake = (props) => {
	let id = props.id;
	let i = 0;
	const snake = props.segments.map((segment) => {
		id = props.id+i;
		i++;
		return(
			<SnakeSegment key={id} position={segment} />
		)
	})
	return snake
}

export default Snake;