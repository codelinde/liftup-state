import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Box from './Box';
import Hexy from './Hexy';
import Rgby from './Rgby';

var Color = require('color');

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    colorCode: 'rgb(45,68,1)'
  };





  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Box colorCode={this.state.colorCode} key="box-component" />
          <Hexy key="hex-component" />
          <Rgby key="rgby-component" />
        </header>
      </div>
    );
  }
}

export default App;
