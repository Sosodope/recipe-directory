import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const API_KEY = "c45ac00e75670f133f58855a5e78629b";

class Recipe extends Component {
  state = {
    activeRecipe: [],
    loading: true
  };
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(
      `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`
    );
    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0], loading: false });
  };
  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="container">
        {this.state.loading ? (
          <Loading />
        ) : (
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__publisher">
              Published by: <span>{recipe.publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Website:{" "}
              <span>
                <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
              </span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Back</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
