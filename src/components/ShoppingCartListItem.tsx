import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import AddToCartButton from "./AddToCartButton";
import AddToFavouritesBtn from "./AddToFavouritesBtn";

interface ShoppingCartListItemProps {
  recipe: {
    label: string;
    image: string;
    ingredientLines: Array<String>;
    url: string;
  };
}

export const ShoppingCartListItem: React.FC<ShoppingCartListItemProps> = ({ recipe }) => {
  return (
    <Card
      style={{
        width: "24rem",
        background: "rgba(255,255,255, 0.9)",
        marginTop: "3%",
        display: "inline-block"
      }}
    >
      <Card.Body>
        <Card.Img
          variant="top"
          src={recipe.image}
          style={{ background: "rgba(0,0,0,1)" }}
        />
        <br></br>
        <Card.Title style={{ marginTop: "2%" }}>{recipe.label}</Card.Title>
        {recipe.ingredientLines.map((ingredient => {
            return <li>{ingredient}</li>
        }))}
      </Card.Body>
    </Card>
  );
};

export default ShoppingCartListItem;
