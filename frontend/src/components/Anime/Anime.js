import React, { Component } from "react";

import "./Anime.scss";

class anime extends Component {
  state = {
    animes: {},
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
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        {this.props.animes.data.map((e) => (
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
        ))}
      </React.Fragment>
    );
  }
}

export default anime;
