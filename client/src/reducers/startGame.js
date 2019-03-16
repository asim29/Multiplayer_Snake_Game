import createSnakes from './createSnakes';

function startGame(state, initialGameState) {
	state = {
    ...state,
    gameState: {
      ...initialGameState,
      started: true,
    }
  }
  const newState = createSnakes(state);
  
  return newState;	
}
export default startGame;