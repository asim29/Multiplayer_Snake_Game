function turnSnake(state, action){
	const socket = action.socket;

	if(action.key === "ArrowUp" || action.key === "ArrowDown" || 
		action.key === "ArrowLeft" || action.key === "ArrowRight" ){
		socket.emit('turnSnake', {key: action.key, gameState: state.gameState})
		console.log("Sent", state.gameState)
	}
	return state;
}

export default turnSnake;