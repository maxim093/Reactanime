import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Animes from "../src/components/Animes/Animes";
import AnimeDescription from "./components/AnimeDescription/AnimeDescription";
import Navbar from "./components/Layout/Navbar/Navbar";
import "./App.scss";

class App extends Component {
  state = {
    anime: [
      {
        _id: null,
        title: null,
        thumbnail: null,
        description: null,
        release: null,
      },
    ],
  };

  componentDidMount() {
    fetch("/animes")
      .then((res) => res.json())
      .then((anime) => this.setState({ anime }));
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Redirect from="/" to="/animes" />
        <Switch>
          <Route
            exact
            path="/animes"
            render={(props) => <Animes {...props} anime={this.state.anime} />}
          />
          <Route
            exact
            path="/animes/:_id"
            render={(props) => (
              <AnimeDescription {...props} anime={this.state.anime} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
