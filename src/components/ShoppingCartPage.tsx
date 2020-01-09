import React, { useEffect, useState } from "react";
import { async } from "q";
import { RecipeList } from "components/RecipeList";
import CardDeck from "react-bootstrap/CardDeck";
import { createGlobalStyle } from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ShoppingCartList } from "./ShoppingCartList";
import HomeBtn from "./HomeBtn";
import { Router, Route, Link } from "react-router-dom";
import Axios from "axios";
import App from "App";


interface Recipe {
  label: string;
  image: string;
  ingredientLines: Array<String>;
  url: string;
}

const ShoppingCartPage = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState([]);

  const fetchItems = () => {
    Axios({
      method: "get",
      url: "http://localhost:8080/api/cart"
    }).then(
      response => {
        let recipes = response.data.map((res: any) => {
          let obj: Recipe = {
            label: res.label,
            image: res.image,
            ingredientLines: res.ingredientLines,
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

  const notFoundObject = [
    {
      label: "Empty:(",
      image: "",
      ingredientLines: [],
      url: "/"
    }
  ];
  if (error) {
    return (
      <React.Fragment>
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
            </Button>
          </Card.Title>
          <Link to="/">
            <Button variant="outline-dark">Home</Button>
          </Link>
          <br></br>
          <br></br>
        </Card.Body>
      </Card>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <HomeBtn />
        <CardDeck>
          <ShoppingCartList
            recipes={recipes.length == 0 ? notFoundObject : recipes}
          />
        </CardDeck>
      </React.Fragment>
    );
  }
};
export default ShoppingCartPage;
