import createSnakes from './createSnakes';

function moveObjects(state, action) {
  if (!state.gameState.started) return state;

  const newState = createSnakes(state);

  return {
    ...newState,
    gameState: {
      ...newState.gameState,
    },
  };
}

export default moveObjects;