import React from "react";
import { RecipeListItem } from "./RecipeListItem";

interface Recipe {
  label: string;
  image: string;
  ingredientLines: Array<String>;
  url: string;
}

interface RecipeListProp {
  recipes: Array<Recipe>;
}

export const RecipeList: React.FC<RecipeListProp> = ({ recipes }) => {
  return (
    <ul style={{ textAlign: "center" }}>
      {" "}
      {recipes.map(recipe => {
        return <RecipeListItem recipe={recipe} />;
      })}
    </ul>
  );
};
