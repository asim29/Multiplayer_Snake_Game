import { connect } from 'react-redux';
import App from '../App';
import { 
  moveObjects, startGame
} from '../actions/index';

const mapStateToProps = state => ({
  gameState: state.gameState,
});

const mapDispatchToProps = dispatch => ({
  moveObjects: () => {
    dispatch(moveObjects());
  },
  startGame: () => {
    dispatch(startGame());
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;