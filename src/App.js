import React, { Component } from 'react';
import './App.css';
import './components/WordInput/WordInput'
import WordInput from "./components/WordInput/WordInput";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <WordInput/>
        </header>
      </div>
    );
  }
}

export default App;
