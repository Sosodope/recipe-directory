import React, { Component } from "react";

const Form = props => {
  return (
    <form onSubmit={props.getRecipes}>
      <input type="text" name="searchTerm" className="form__input" />
      <button className="form__button">Search for Recipes</button>
    </form>
  );
};

export default Form;
