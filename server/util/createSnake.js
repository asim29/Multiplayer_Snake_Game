function createSnake(id) {
	x_position = Math.floor(Math.random()*100 + 100);
	y_position = Math.floor(Math.random()*(-500) - 100);
	const direction = Math.floor(Math.random()*4);

	const snake = {
		segments: [
		{
			x: x_position,
			y: y_position,
		},
		{
			x: x_position - 10,
			y: y_position,
		},
		{
			x: x_position - 20,
			y: y_position,
		},
		{
			x: x_position - 30,
			y: y_position,
		}],
		direction: direction,
		id: id,
	}

	return snake;
}

module.exports.createSnake = createSnake;