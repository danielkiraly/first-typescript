import React from "react";
import { FavouriteListItem } from "./FavouriteListItem";

interface Recipe {
  label: string;
  image: string;
  ingredients: Array<String>;
  url: string;
}

interface RecipeListProp {
  recipes: Array<Recipe>;
}

export const FavouriteList: React.FC<RecipeListProp> = ({ recipes }) => {
  return (
    <ul style={{ textAlign: "center" }}>
      {" "}
      {recipes.map(recipe => {
        return <FavouriteListItem recipe={recipe} />;
      })}
    </ul>
  );
};

export default FavouriteList;
