import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Canvas from './components/Canvas';


class App extends Component {
  
  componentDidMount() {
    const self = this;

    setInterval(() => {
        self.props.moveObjects();
    }, 50);
    
    window.onresize = () => {
      const cnv = document.getElementById('aliens-go-home-canvas');
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize();
  }

  render() {
    return (
      <Canvas
        gameState={this.props.gameState}
        startGame={this.props.startGame}
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