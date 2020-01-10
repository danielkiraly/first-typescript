import React from "react";
import { ShoppingCartListItem } from "./ShoppingCartListItem";


interface Ingredient {
  text: string;
  weight: string;
}

interface IngredientsProp {
  ingredients: Array<Ingredient>;
}

export const ShoppingCartList: React.FC<IngredientsProp> = ({ ingredients }) => {
  return (
    <ul style={{ textAlign: "center" }}>
      {" "}
      {ingredients.map(ingredient => {
        return <ShoppingCartListItem ingredient={ingredient} />;
      })}
    </ul>
  );
};
