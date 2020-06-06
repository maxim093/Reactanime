import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

import List from "./components/List/List";
import Navbar from "./components/Layout/Navbar/Navbar";
import "./App.scss";
import NewList from "./components/NewList/NewList";

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
    mylists: [{}],
  };

  componentDidMount() {
    //Get User Lists
    this.fetchUsersLists();
  }

  fetchUsersLists() {
    try {
      fetch("/list")
        .then((res) => res.json())
        .then((anime) => this.setState({ mylists: anime }));
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <NewList myLists={this.state.mylists} />
        <Route
          exact
          path="/lists/:listId"
          render={(props) => <List {...props} />}
        />
      </div>
    );
  }
}

export default withRouter(App);
