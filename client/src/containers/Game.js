import { connect } from 'react-redux';
import App from '../App';
import { 
  moveObjects, loadGame, 
  addSnake, getId, getIdFromServer,
  removeSnake, turnSnake, getGameStateFromServer,
} from '../actions/index';

const mapStateToProps = state => ({
  gameState: state.gameState,
  socket: state.socket,
  myid: state.myid,
});

const mapDispatchToProps = dispatch => ({
  moveObjects: (socket) => {
    dispatch(moveObjects(socket));
  },
  loadGame: (socket) => {
    dispatch(loadGame(socket));
  },
  addSnake: (snake) => {
    dispatch(addSnake(snake))
  },
  getId: (id) => {
    dispatch(getId(id))
  },
  removeSnake: (snakeId) => {
    dispatch(removeSnake(snakeId))
  },
  turnSnake: (snakeId, socket) => {
    dispatch(turnSnake(snakeId, socket))
  },
  getIdFromServer: (socket) => {
    dispatch(getIdFromServer(socket))
  },
  getGameStateFromServer: (socket) => {
    dispatch(getGameStateFromServer(socket))
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;