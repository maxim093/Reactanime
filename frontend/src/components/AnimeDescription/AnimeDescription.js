import React, { Component } from "react";

import "./AnimeDescription.css";

class animeDescription extends Component {
  state = {
    selectedAnime: {},
  };
  componentDidMount() {
    // console.log(this.props.anime);
    // console.log(this.props.match.params._id);
    this.loadData();
  }

  componentDidUpdate() {
    if (this.state.selectedAnime._id != this.props.match.params._id) {
      this.loadData();
    }
  }

  loadData() {
    const selectedAnime = this.props.anime.find(
      (x) => x._id === this.props.match.params._id
    );
    this.setState({ selectedAnime: selectedAnime });
  }

  render() {
    return (
      <div className="descriptionWrapper">
        <h2 className="titleText">{this.state.selectedAnime.title} </h2>
        <span className="releaseText">{this.state.selectedAnime.release}</span>
        <p className="descriptionText">
          {this.state.selectedAnime.description}
        </p>
      </div>
    );
  }
}

export default animeDescription;
