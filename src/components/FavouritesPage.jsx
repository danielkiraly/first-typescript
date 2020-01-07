import React, { useEffect, useState } from "react";
import { async } from "q";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import HomeBtn from "./HomeBtn";
import FavouriteList from "./FavouriteList"

const FavouritePage = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("http://localhost:8080/api/favourites");
    const recipes = await data.json();
    const error = await data.status;
    setError(error)
    setRecipes(recipes);
  };

  const notFoundObject = [
    {
      label: "Empty:(",
      image: "",
      ingredientLines: [],
      url: "/"
    }
  ];
  if (recipes.error) {
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
          <br></br>
          <Card.Title style={{ marginTop: "2%" }}>
            <a href={"https://httpstatusdogs.com/" + error}>Error, click for more information!</a>
          </Card.Title>
          <a href="/" style={{ textDecoration: "none" }}>
            Go back
          </a>
          <br></br>
          <br></br>
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <React.Fragment>
        <HomeBtn />>
        <CardDeck>
          <FavouriteList
            recipes={recipes.length === 0 ? notFoundObject : recipes}
          />
        </CardDeck>
      </React.Fragment>
    );
  }
};
export default FavouritePage;
