import Button from "react-bootstrap/Button";
import React from "react";
import axios from "axios";

const AddToCartButton = props => {
  const addToCartHandler = () => {
    axios({
      method: "post",
      url: "http://localhost:8080/api/cart",
      data: {
        label: props.recipe.label,
        image: props.recipe.image,
        ingredients: props.recipe.ingredients,
        url: props.recipe.url
      }
    });
  };

  return (
    <Button
      onClick={addToCartHandler}
      variant="light"
      style={{ float: "left", marginLeft: "20%", marginBottom: "2%" }}
    >
      <span role="img">🛒</span>
    </Button>
  );
};

export default AddToCartButton;
