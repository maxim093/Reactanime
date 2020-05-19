import React, { Component } from "react";

class animeDescription extends Component {
  state = {
    selectedAnime: {},
  };
  componentDidMount() {
    console.log(this.props.anime);
    console.log(this.props.match.params._id);
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
    console.log(selectedAnime);
    this.setState({ selectedAnime: selectedAnime });
  }

  render() {
    return (
      <React.Fragment>
        <p>title:{this.state.selectedAnime.title} </p>
      </React.Fragment>
    );
  }
}

export default animeDescription;
