import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Canvas from './components/Canvas';
import io from 'socket.io-client';

class App extends Component {
  
  componentDidMount() {
    const self = this;

    const url = "http://localhost:"
    const port = "8000"

    const socket = io.connect(url+port)
    this.props.getIdFromServer(socket)

    setInterval(() => {
        self.props.moveObjects();
    }, 50);
    
    window.onresize = () => {
      const cnv = document.getElementById('aliens-go-home-canvas');
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize();
    console.log(this.props.text)
  }

  render() {
    return (
      <Canvas
        gameState={this.props.gameState}
        startGame={this.props.startGame}
        socket={this.props.socket}
        id={this.props.myid}
        text={this.props.text}
      />
    );
  }
}

App.propTypes = {
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
  }).isRequired,
  moveObjects: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default App;