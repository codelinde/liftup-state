import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Box from './Box';
// import Hexy from './Hexy';
// import Rgby from './Rgby';

// var Color = require('color');

function Boxy(props) {
  return (
    <div className="boxes" style={{ backgroundColor: props.colorCode }}>
      color
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      colorCode: '',
    };
  }

  handleChange(e) {
    this.setState({
      colorCode: e.target.value
    })

  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Boxy colorCode={this.state.colorCode} key="box-component" />
          <div className="type-box">
            <input type="text" placeholder="#000000" onChange={this.handleChange} value={this.state.colorCode} class="boxes" />
          </div>
          <div className="type-box">
            <input type="text" placeholder="rgb(0,0,0)" onChange={this.handleChange} value={this.state.colorCode} class="boxes" />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
