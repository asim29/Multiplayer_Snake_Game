import { 
  MOVE_OBJECTS, LOAD_GAME,
  ADD_SNAKE, GET_ID,
  REMOVE_SNAKE, 
  TURN_SNAKE, UPDATE_GAME_STATE,
} from '../actions';
import moveObjects from './moveObjects';
import loadGame from './loadGame';
import removeSnake from './removeSnake';
import turnSnake from './turnSnake';

const initialGameState = {
  waiting: false,
  started: false,
  snakes: [],
  text: "Tap To Start!",
};

const initialState = {
  gameState: initialGameState,
  myid: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case TURN_SNAKE:
      return turnSnake(state, action)
    case UPDATE_GAME_STATE:
      return {
        ...state,
        gameState: action.gameState,
      }
    case REMOVE_SNAKE:
      return removeSnake(state, action.snakeId);
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
      };
    case GET_ID:
      return {
        ...state,
        myid: action.id,
      };
    case MOVE_OBJECTS:
      return moveObjects(state, action.socket);
    case LOAD_GAME:
      console.log("In load game reducer: ", action.socket)
      return loadGame(state, action.socket);
    default:
      return state;
  }
}

export default reducer;
