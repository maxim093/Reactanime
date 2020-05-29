import React, { Component } from "react";
import { Link } from "react-router-dom";
import Anime from "./Anime/Anime";
import NewList from "../NewList/NewList";
import "./Animes.scss";

class Animes extends Component {
  render() {
    return (
      <div>
        <NewList />
        <div className="headingCon">
          <h1 className="heading">
            Meine <span className="colorDecoration">Watchlist</span>
          </h1>
          <p className="pageInfo">
            Hier kannst du deine aktuelle Watchlist ansehen
          </p>
        </div>
        <div className="wrapper">
          {this.props.anime.map((anime) => (
            <Link
              className="anime"
              key={anime._id}
              to={"/animes/" + anime._id}
              {...this.props}
              anime={this.props.anime}
            >
              <Anime title={anime.title} thumbnail={anime.thumbnail} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Animes;
