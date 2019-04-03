import React from 'react';
import { boundaryLeft, boundaryRight,
		boundaryTop, boundaryBot
		} from '../utils/constants'


const Snakebox = () => {
	const style = {
		fill:'#000000',		
		stroke:'#9ea2a8',
		strokeWidth:'5px'
	};
	return (
		<rect
			style={style}
			x={boundaryLeft}
			y={boundaryTop}
			width={boundaryRight - boundaryLeft}
			height={boundaryBot - boundaryTop}
		/>
	);
};

export default Snakebox;