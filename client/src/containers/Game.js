import { connect } from 'react-redux';
import App from '../App';
import { 
  moveObjects, startGame, 
  addSnake, getId, getIdFromServer,
} from '../actions/index';

const mapStateToProps = state => ({
  gameState: state.gameState,
  socket: state.socket,
  myid: state.myid,
  text: state.text,
});

const mapDispatchToProps = dispatch => ({
  moveObjects: () => {
    dispatch(moveObjects());
  },
  startGame: () => {
    dispatch(startGame());
  },
  addSnake: (snake) => {
    dispatch(addSnake(snake))
  },
  getId: (id) => {
    dispatch(getId(id))
  },
  getIdFromServer: (socket) => {
    dispatch(getIdFromServer(socket))
  }
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;