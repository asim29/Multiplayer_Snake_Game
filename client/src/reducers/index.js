import { 
  MOVE_OBJECTS, START_GAME 
} from '../actions';
import moveObjects from './moveObjects';
import startGame from './startGame';


const initialGameState = {
  started: false,
  snakes: [],
};

const initialState = {
  gameState: initialGameState,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    case START_GAME:
      return startGame(state, initialGameState);
    default:
      return state;
  }
}

export default reducer;
