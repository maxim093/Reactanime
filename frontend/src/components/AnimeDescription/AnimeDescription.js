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
        <div className="descriptionWrapper">
          <h2 className="titleText">{this.state.selectedAnime.title} </h2>
          <span className="releaseText">
            {this.state.selectedAnime.release}
          </span>
          <p className="descriptionText">
            {this.state.selectedAnime.description}
          </p>
        </div>
        <div>
          <button>Zurück</button>
        </div>
      </React.Fragment>
    );
  }
}

export default animeDescription;
