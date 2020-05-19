import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    anime: [
      {
        id: null,
        title: null,
      },
    ],
  };

  componentDidMount() {
    fetch("/anime")
      .then((res) => res.json())
      .then((anime) => this.setState({ anime }));
  }

  render() {
    return (
      <div className="App">
        <h1>Anime</h1>
        {this.state.anime.map((anime) => (
          <div key={anime.id}>{anime.title}</div>
        ))}
      </div>
    );
  }
}

export default App;
