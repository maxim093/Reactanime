import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Anime from "./Anime/Anime";
import "./Animes.css";
import AnimeDescription from "../AnimeDescription/AnimeDescription";

class Animes extends Component {
  state = {
    anime: [
      {
        _id: null,
        title: null,
        thumbnail: null,
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
      <div>
        <h1 className="heading">Top Animes</h1>
        <div className="wrapper">
          {this.state.anime.map((anime) => (
            <Link key={anime._id} to={"/animes/" + anime._id}>
              <Anime title={anime.title} thumbnail={anime.thumbnail} />
            </Link>
          ))}
        </div>
        <Route
          path="/animes/:_id"
          render={(props) => (
            <AnimeDescription {...props} anime={this.state.anime} />
          )}
        />
      </div>
    );
  }
}

export default Animes;
