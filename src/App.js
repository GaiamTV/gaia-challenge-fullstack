import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__main-heading">{`Hello!  This is the <App /> component!  Please render your UI in .app__body below`}</h1>
        </header>
        <div className="app__body">
          {/* TODO: render UI here */}
        </div>
      </div>
    );
  }
}

export default App;
