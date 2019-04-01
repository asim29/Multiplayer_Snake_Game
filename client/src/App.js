import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Canvas from './components/Canvas';
import io from 'socket.io-client';

let socket;

class App extends Component {
 

  componentDidMount() {
    const self = this;

    const url = "http://localhost:"
    const port = "8000"

    socket = io.connect(url+port)
    self.props.getIdFromServer(socket)

    setInterval(() => {
        self.props.moveObjects(socket);
    }, 50);

    setInterval(() => {
        self.props.getGameStateFromServer(socket)
    }, 10)

    window.onresize = () => {
      const cnv = document.getElementById('snake-io-canvas');
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize();
    window.addEventListener('keydown', (event) => {
      this.props.turnSnake(event.key, socket)
    })
  }


  componentWillUnmount() {
    console.log("Unmounting")
    socket.disconnect()
  }



  render() {
    return (
      <div onKeyPress={this.handleKeyDown}>
        <Canvas
          gameState={this.props.gameState}
          loadGame={this.props.loadGame}
          id={this.props.myid}
          socket={socket}
        />
      </div>
    );
  }
}

App.propTypes = {
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
  }).isRequired,
  moveObjects: PropTypes.func.isRequired,
  loadGame: PropTypes.func.isRequired,
};

export default App;