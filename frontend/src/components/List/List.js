import React, { Component } from "react";
import "./List.scss";
import Anime from "../Anime/Anime";

class List extends Component {
  state = {
    currentList: " ",
    listedAnimes: {},
    searchedForNewAnimes: false,
    searchedAnimes: {},
  };

  // Get the currently selected list by looking which
  // id in the list collection matches the id given in query params
  fetchCurrentList() {
    try {
      fetch("/list")
        .then((res) => res.json())
        .then((anime) => {
          this.setState({
            currentList: anime.find(
              (e) => e._id === this.props.match.params.listId
            ),
          });

          this.fetchAnimesById();
          this.setState({ searchedForNewAnimes: false });
        });
    } catch (error) {
      console.log(error);
    }
  }

  // Get data from Kitsu Api----------------------------------------------
  // It takes Id/Ids that are saved in the currently selected list
  // and with the given ids pull the data, for example title/thumbnail, from Kitsu Api
  fetchAnimesById() {
    try {
      fetch(
        `https://kitsu.io/api/edge/anime?filter[id]=${this.state.currentList.animeIds.join(
          ","
        )}`
      )
        .then((res) => res.json())
        .then((data) => this.setState({ listedAnimes: data }));
    } catch (error) {
      console.log(error);
    }
  }

  // Function for fetching Animedata by a certain name
  searchForAnimes = () => {
    this.setState({ searchedForNewAnimes: true });
    const value = document.querySelector(".animeSearchField").value;

    try {
      fetch(`https://kitsu.io/api/edge//anime?filter[text]=${value}`)
        .then((res) => res.json())
        .then((data) => this.setState({ searchedAnimes: data }));
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchCurrentList();
  }

  componentDidUpdate() {
    if (this.props.match.params.listId !== this.state.currentList._id) {
      this.fetchCurrentList();
    }
  }

  render() {
    return (
      <div>
        <div className="headingCon">
          <h1 className="heading">
            Meine <span className="colorDecoration">Watchlist</span>
          </h1>
          <p className="listName">{this.state.currentList.title}</p>
          <input
            className="animeSearchField"
            type="text"
            placeholder="Suche nach Animes"
          />
          <button onClick={this.searchForAnimes} className="searchBtn">
            Suchen
          </button>
          {this.state.searchedForNewAnimes === true ? (
            <p className="pageInfo">
              Hier kannst du deiner Watchlist neue Animes hinzufügen
            </p>
          ) : (
            <p className="pageInfo">
              Hier kannst du deine aktuelle Watchlist ansehen
            </p>
          )}
        </div>
        <div className="wrapper">
          {this.state.listedAnimes.data !== undefined &&
          this.state.searchedForNewAnimes === false ? (
            <Anime animes={this.state.listedAnimes} />
          ) : null}
          {this.state.searchedAnimes.data !== undefined &&
          this.state.searchedForNewAnimes === true ? (
            <Anime
              animes={this.state.searchedAnimes}
              {...this.props}
              searched={true}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default List;
