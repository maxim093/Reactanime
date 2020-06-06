import React, { Component } from "react";

import "./AnimeDescription.scss";

class animeDescription extends Component {
  state = {
    selectedAnime: [
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
    const selectedAnime = this.props.anime.find(
      (x) => x._id === this.props.match.params._id
    );
    this.setState({ selectedAnime: selectedAnime });
  }

  render() {
    return (
      <React.Fragment>
        <div className="buttonCon">
          <button onClick={this.props.history.goBack} className="backButton">
            Hier gehts Zurück
          </button>
        </div>
        <div className="descriptionWrapper">
          <img
            className="Cover"
            src={this.state.selectedAnime.thumbnail}
            alt="animeCover"
          ></img>
          <h2 className="titleText">{this.state.selectedAnime.title} </h2>
          <span className="releaseText">
            {this.state.selectedAnime.release}
          </span>
          <p className="descriptionText">
            {this.state.selectedAnime.description}
          </p>
        </div>
        <div></div>
      </React.Fragment>
    );
  }
}

export default animeDescription;
