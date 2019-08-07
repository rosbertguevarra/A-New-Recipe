import React, { Component } from "react";
import axios from "axios";
import RecipeList from "./RecipeList";
import "../style/home.css";
import Banner from "./Banner";

class Home extends Component {
  state = {
    q: "",
    data: [],
    loading: false
  };

  onChange = e => {
    this.setState({
      q: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const APP_ID = "9a152d45";
    const APP_KEY = "05e0d478cea48dc2a25d4df4988bc17e";
    this.setState({ loading: true });
    axios
      .get(
        `https://api.edamam.com/search?q=${
          this.state.q
        }&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
      .then(response => {
        this.setState({
          data: response.data.hits,
          q: "",
          loading: false
        });
      });
  };
  renderList = () => {
    const { loading } = this.state;
    if (loading) {
      return (
        <div class="lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      );
    } else {
      return <RecipeList list={this.state.data} />;
    }
  };

  render() {
    return (
      <div className="container">
        <Banner />
        <form onSubmit={this.onSubmit} className="form-input">
          <input
            type="text"
            onChange={this.onChange}
            placeholder="Enter your Desired food recipe"
            required
          />
          <button className="btn btn-danger" type="submit">
            Submit
          </button>
        </form>
        <div className="container">{this.renderList()}</div>
      </div>
    );
  }
}

export default Home;
