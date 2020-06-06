import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./NewList.scss";
import MyLists from "../MyLists/MyLists";

class NewList extends Component {
  // Save new List for User
  async saveNewList() {
    try {
      const newListTitle = document.querySelector(".newListTitleField").value;
      const response = await fetch("/list", {
        method: "POST",
        body: JSON.stringify({
          title: newListTitle,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const saved = await response.json();
      const newListCon = document.querySelector(".newListCon");
      newListCon.appendChild(document.createTextNode(saved.message));
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
          <button className="submitBtn" onClick={this.saveNewList}>
            <i className="fas fa-plus fa-2x"></i>
          </button>
        </div>
        <Route
          path="/"
          render={(props) => <MyLists myLists={this.props.myLists} />}
        />
      </div>
    );
  }
}

export default NewList;
