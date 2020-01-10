import React, { useEffect, useState } from "react";
import { async } from "q";
import { RecipeList } from "components/RecipeList";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ShoppingCartList } from "./ShoppingCartList";
import HomeBtn from "./HomeBtn";
import { Router, Route, Link } from "react-router-dom";
import Axios from "axios";
import App from "App";


interface Ingredient {
  text: string;
  weight: string;
}

const ShoppingCartPage = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [error, setError] = useState([]);
  const [ingredients, setIngredients] = useState([])

  const fetchItems = () => {
    Axios({
      method: "get",
      url: "http://localhost:8080/api/cart"
    }).then(
      response => {
        let ingredients = response.data.map((res: any) => {
          let obj: Ingredient = {
            text: res.text,
            weight: res.weight
          };
          return obj;
        });
        setIngredients(ingredients);
      },
      error => {
        setError(error.response.status);
        console.log(error);
      }
    );
  };

  const notFoundObject = [
    {
      text: "off",
      weight: "hehh"
    }
  ];
  if (error.length > 0) {
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
            ingredients={ingredients.length == 0 ? notFoundObject : ingredients}
          />
        </CardDeck>
      </React.Fragment>
    );
  }
};
export default ShoppingCartPage;
