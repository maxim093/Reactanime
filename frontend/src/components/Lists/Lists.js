import React, { Component } from "react";
import { Link } from "react-router-dom";

import List from "./List/List";

class Lists extends Component {
  state = {};

  render() {
    return (
      <List
        title={this.props.watchLists.map((list) => (
          <Link>
            <li>{list.title}</li>
          </Link>
        ))}
      />
    );
  }
}

export default Lists;
