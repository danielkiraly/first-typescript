import React, { useEffect, useState } from "react";
import { async } from "q";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import HomeBtn from "./HomeBtn";
import FavouriteList from "./FavouriteList";
import { Router, Route, Link } from "react-router-dom";
import Axios from "axios";
import Button from "react-bootstrap/Button";

interface Recipe {
  label: string;
  image: string;
  ingredients: Array<String>;
  url: string;
}

const FavouritePage = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const notFoundObject = [
    {
      label: "Empty:(",
      image: "",
      ingredients: [],
      url: "/"
    }
  ];

  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState([]);

  const fetchItems = () => {
    Axios({
      method: "get",
      url: "http://localhost:8080/api/favourites"
    }).then(
      response => {
        let recipes = response.data.map((res: any) => {
          let obj: Recipe = {
            label: res.label,
            image: res.image,
            ingredients: res.ingredients,
            url: res.url
          };
          return obj;
        });
        setRecipes(recipes);
      },
      error => {
        setError(error.response.status);
        console.log(error);
      }
    );
  };
  if (error.length > 0) {
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
            <Button
              variant="danger"
              href={"https://httpstatusdogs.com/" + error}
            >
              Error, click for more information!
              {console.log(error)}
            </Button>
          </Card.Title>
          <Link to="/">
            <Button variant="outline-dark">Home</Button>
          </Link>
          <br></br>
          <br></br>
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <React.Fragment>
        <HomeBtn />
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
