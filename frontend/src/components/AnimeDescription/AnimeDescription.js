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
        <div className="titleText">
          <h2>{this.state.selectedAnime.title} </h2>
        </div>
        <div className="descriptionText">
          <p>{this.state.selectedAnime.description}</p>
        </div>
      </div>
    );
  }
}

export default animeDescription;
