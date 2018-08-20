import React, { Component } from "react";

const Recipes = props => {
  return (
    <div className="content">
      {props.recipes.map(recipe => {
        return (
          <div className="recipe" key={recipe.recipe_id}>
            <img src={recipe.image_url} alt={recipe.title} />
            {recipe.title}
          </div>
        );
      })}
    </div>
  );
};

export default Recipes;
