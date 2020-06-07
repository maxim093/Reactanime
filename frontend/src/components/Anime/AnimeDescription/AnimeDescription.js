import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./AnimeDescription.scss";

class animeDescription extends Component {
  state = {
    animeDescription: {},
  };

  componentDidMount() {
    const findChoosenAnime = this.props.animes.data.find(
      (e) => e.id === this.props.choosenAnime
    );

    this.setState({
      animeDescription: findChoosenAnime,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="descriptionWrapper">
          <div className="buttonCon">
            <button onClick={this.props.history.goBack} className="backButton">
              Hier gehts Zurück
            </button>
          </div>
          <img
            className="Cover"
            src={
              this.state.animeDescription.attributes
                ? this.state.animeDescription.attributes.posterImage.original
                : null
            }
            alt="animeCover"
          ></img>
          <h2 className="titleText">
            {this.state.animeDescription.attributes
              ? this.state.animeDescription.attributes.canonicalTitle
              : null}
          </h2>
          <span className="releaseText">
            {this.state.animeDescription.attributes
              ? this.state.animeDescription.attributes.startDate
              : null}
          </span>
          <p className="descriptionText">
            {" "}
            {this.state.animeDescription.attributes
              ? this.state.animeDescription.attributes.synopsis
              : null}
          </p>
        </div>
        <div></div>
      </React.Fragment>
    );
  }
}

export default withRouter(animeDescription);
