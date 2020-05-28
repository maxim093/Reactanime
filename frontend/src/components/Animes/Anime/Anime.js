import React from "react";

import "./Anime.scss";

const anime = (props) => {
  return (
    <div
      className="animeContainer"
      style={{
        backgroundImage: `url(${props.thumbnail})`,
      }}
    >
      <h2 className="title">{props.title}</h2>
    </div>
  );
};

export default anime;
