import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import AnimeDescription from "./AnimeDescription/AnimeDescription";
import "./Anime.scss";

class anime extends Component {
  state = {
    animes: {},
    showDescription: false,
    choosenAnime: null,
  };

  // Update current List with choosen Anime
  saveAnimeToCurrentList(id) {
    try {
      if (this.props.searched === true) {
        fetch(`/list/${this.props.match.params.listId}/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        });
        let path = `/list/${this.props.match.params.listId}`;
        this.props.history.push(path);
        alert("Liste aktualisiert!");
      } else {
        this.setState({ choosenAnime: id });
        this.setState({ showDescription: true });
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.showDescription ? (
          <AnimeDescription
            {...this.props}
            choosenAnime={this.state.choosenAnime}
          />
        ) : (
          this.props.animes.data.map((e) => (
            <div
              key={e.id}
              className="animeContainer"
              onClick={() => this.saveAnimeToCurrentList(e.id)}
              style={{
                backgroundImage: `url(${e.attributes.posterImage.original})`,
              }}
            >
              <h2 className="title">{e.attributes.canonicalTitle}</h2>
            </div>
          ))
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(anime);
