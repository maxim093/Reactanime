import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./MyLists.scss";

class Lists extends Component {
  render() {
    return (
      <div className="listsCon">
        <h3>Deine Listen:</h3>
        {this.props.myLists.map((list) => (
          <Link key={list._id} className="myLists" to={"/lists/" + list._id}>
            <li>{list.title}</li>
          </Link>
        ))}
      </div>
    );
  }
}

export default Lists;
