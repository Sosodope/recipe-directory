import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";

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
      <div>
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
          <Form recipe={this.state.recipes} getRecipes={this.getRecipes} />
        </header>
        <div>
          <ul>
            {this.state.recipes.map(recipe => {
              return <li key={recipe.recipe_id}>{recipe.title}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
