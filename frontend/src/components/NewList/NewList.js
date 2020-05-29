import React, { Component } from "react";

import "./NewList.scss";
import Lists from "../Lists/Lists";

class NewList extends Component {
  state = {
    watchLists: [{}],
  };
  componentDidMount() {
    try {
      fetch("/list")
        .then((res) => res.json())
        .then((anime) => this.setState({ watchLists: anime }));
    } catch (error) {
      console.log(error);
    }
  }

  getValue() {
    const newListTitle = document.querySelector(".newListTitleField").value;

    try {
      fetch("/list", {
        method: "POST",
        body: JSON.stringify({
          title: newListTitle,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="newListCon">
        <div className="listHeading">Noch ne Liste gefällig?</div>
        <div className="listDescription">
          Dann bist du <span className="colorDecoration">hier</span> richtig!
        </div>
        <div className="inputCon">
          <input className="newListTitleField" type="text" name="title" />
          <button className="submitBtn" onClick={this.getValue}>
            <i className="fas fa-plus fa-2x"></i>
          </button>
        </div>
        <Lists watchLists={this.state.watchLists} />
      </div>
    );
  }
}

export default NewList;
