import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import AddToCartButton from "./AddToCartButton";
import AddToFavouritesBtn from "./AddToFavouritesBtn";
import Button from "react-bootstrap/Button";

interface RecipeListItemProps {
  recipe: {
    label: string;
    image: string;
    ingredients: Array<String>;
    url: string;
  };
}

export const RecipeListItem: React.FC<RecipeListItemProps> = ({ recipe }) => {
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
        <Button variant="success" href={recipe.url}>
          Click to see the recipe!
        </Button>
        <br></br>
        <br></br>
        <AddToCartButton recipe={recipe} />
        <AddToFavouritesBtn recipe={recipe} />
      </Card.Body>
    </Card>
  );
};
