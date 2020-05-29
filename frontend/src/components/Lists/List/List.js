import React from "react";

const List = (props) => {
  return (
    <div>
      <h3>Deine bisherigen Listen:</h3>
      <h4>{props.title}</h4>
    </div>
  );
};

export default List;
