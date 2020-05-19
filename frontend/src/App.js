import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Animes from "../src/components/Animes/Animes";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Redirect from="/" to="/animes" />
          <Route path="/animes" render={(props) => <Animes {...props} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
