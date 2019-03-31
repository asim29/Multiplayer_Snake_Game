function startGame(state, initialGameState) {
	state = {
    ...state,
    gameState: {
      ...initialGameState,
      started: true,
      waiting: true,
    },
    text: "Waiting for players to connect",
  }

  const newState = state
  // let newState = createSnakes(state);
  console.log(state)
  return newState;	
}
export default startGame;