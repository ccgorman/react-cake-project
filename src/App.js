import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CakeBlog from './containers/CakeBlog/CakeBlog';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/cakehtmlwebchallenge">
        <div className="App">
          <CakeBlog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
