function createSnake(id) {
	let x_position = Math.floor(Math.random()*(900) - 450);
	let y_position = Math.floor(Math.random()*(400) - 800);
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