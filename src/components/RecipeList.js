import React, { Component } from "react";
import Recipe from "./Recipe";

export default class RecipeList extends Component {
  MapRecipe = () => {
    return this.props.list.map((recipe, index) => {
      return <Recipe key={index} id={recipe.recipe.calories} {...recipe} />;
    });
  };
  render() {
    return <div>{this.MapRecipe()}</div>;
  }
}
