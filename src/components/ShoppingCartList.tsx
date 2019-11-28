import React from "react";
import { ShoppingCartListItem } from "./ShoppingCartListItem";

interface Recipe {
  label: string;
  image: string;
  ingredientLines: Array<String>;
  url: string;
}

interface RecipeListProp {
  recipes: Array<Recipe>;
}

export const ShoppingCartList: React.FC<RecipeListProp> = ({ recipes }) => {
  return (
    <ul style={{ textAlign: "center" }}>
      {" "}
      {recipes.map(recipe => {
        return <ShoppingCartListItem recipe={recipe} />;
      })}
    </ul>
  );
};
