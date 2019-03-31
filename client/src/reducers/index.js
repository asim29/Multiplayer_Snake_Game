import { 
  MOVE_OBJECTS, START_GAME,
  ADD_SNAKE, GET_ID,
} from '../actions';
import moveObjects from './moveObjects';
import startGame from './startGame';

const initialGameState = {
  waiting: false,
  started: false,
  snakes: [],
};

const initialState = {
  gameState: initialGameState,
  myid: null,
  text: "Tap To Start!",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SNAKE:
      return {
        ...state,
        gameState: {
          ...state.gameState,
          snakes: [  
            ...state.gameState.snakes,
            action.snake,
          ] 
        }
      }
    case GET_ID:
      console.log(action.id)
      return {
        ...state,
        myid: action.id,
      }
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    case START_GAME:
      return startGame(state, initialGameState);
    default:
      return state;
  }
}

export default reducer;
