import React from 'react';
import { gameHeight, gameWidth
		} from '../utils/constants'


const Background = () => {
	const style = {
		fill:'#000526',
	};
	return (
		<rect
			style={style}
			x={-gameWidth}
			y={-gameHeight}
			width={2*gameWidth}
			height={gameHeight}
		/>
	);
};

export default Background;