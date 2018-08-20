import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Recipes from "./components/Recipes";

const API_KEY = "c45ac00e75670f133f58855a5e78629b";

class App extends Component {
  state = {
    recipes: []
  };
  getRecipes = async e => {
    e.preventDefault();
    const searchTerm = e.target.elements.searchTerm.value;
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${searchTerm}&count=10`
    );
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
  };
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <div>
          <Form recipe={this.state.recipes} getRecipes={this.getRecipes} />
          <Recipes recipes={this.state.recipes} />
        </div>
      </div>
    );
  }
}

export default App;
