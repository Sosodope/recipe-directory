import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Recipes from "./components/Recipes";
import Loading from "./components/Loading";

const API_KEY = "c45ac00e75670f133f58855a5e78629b";

class App extends Component {
  state = {
    recipes: [],
    loading: true
  };
  getRecipes = async e => {
    e.preventDefault();
    const searchTerm = e.target.elements.searchTerm.value;
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${searchTerm}&count=10`
    );
    const data = await api_call.json();
    this.setState({ recipes: data.recipes, loading: false });
  };
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes, loading: false });
  };
  render() {
    return (
      <div className="App container">
        {this.state.loading ? (
          <Loading />
        ) : (
          <React.Fragment>
            <header className="App-header">
              <h1 className="App-title">Recipe Search</h1>
            </header>
            <div>
              <Form recipe={this.state.recipes} getRecipes={this.getRecipes} />
              <Recipes recipes={this.state.recipes} />
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
