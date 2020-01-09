import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import AddToCartButton from "./AddToCartButton";
import AddToFavouritesBtn from "./AddToFavouritesBtn";
import FavouritePage from "./FavouritePage";
import { Router, Route, Link } from "react-router-dom";

interface FavouriteListItemProps {
  recipe: {
    label: string;
    image: string;
    ingredientLines: Array<String>;
    url: string;
  };
}

export const FavouriteListItem: React.FC<FavouriteListItemProps> = ({
  recipe
}) => {
  let message = "";

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

        {recipe.label === "Empty:("
          ? (message = "asd a")
          : (message = "see the recipe")}
        <Link to="/">{message}</Link>

        <br></br>
        <br></br>
      </Card.Body>
    </Card>
  );
};

export default FavouriteListItem;
