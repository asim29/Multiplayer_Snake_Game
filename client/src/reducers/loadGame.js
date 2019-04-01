function loadGame(state, socket) {
  if(socket){
    state = {
      ...state,
      gameState: {
        ...state.initialGameState,
        started: true,
        waiting: true,
        text: "Waiting for server",
        snakes: []
      },
    }

    socket.emit('loadGame', state)

    const newState = state
    // let newState = createSnakes(state);
    console.log(state)
    return newState;  
  }
  else{
    state = {
      ...state,
      gameState: {
        ...state.initialGameState,
        started: true,
        waiting: true,
        text: "There is no server",
        snakes: []
      },
    }

    // const newState = state
    // state = {
    //   ...state,
    //   gameState: {
    //     ...state.gameState,
    //     started: true,
    //     waiting: false,
    //   }
    // }
    // let newState = createSnakes(state);
    console.log(state)
    return state; 
  }
		
}
export default loadGame;