import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts'
import Postform from './components/Postform'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>BLOG SPOT</h2>
        </div>
        <Postform />
        <hr />
         <Posts />
      </div>
    );
  }
}

export default App;
