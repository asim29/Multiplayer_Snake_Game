function createSnake(id) {
	let x_position = Math.floor(Math.random()*(90) - 45)*10;
	let y_position = Math.floor(Math.random()*(40) - 80)*10;
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