import Button from "react-bootstrap/Button";
import React from "react";
import axios from "axios";

const AddToFavouritesBtn = (recipe: any) => {
  const addToFavouritesHandler = () => {
    axios({
      method: "post",
      url: "http://localhost:8080/api/favourites",
      data: {
        label: recipe.recipe.label,
        ingredientLines: recipe.recipe.ingredientLines,
        image: recipe.recipe.image,
        url: recipe.recipe.url
      }
    }).then(response => {
      alert(recipe.recipe.label + " has been saved!");
    });
  };

  return (
    <Button
      onClick={addToFavouritesHandler}
      variant="light"
      style={{ float: "right", marginRight: "20%", marginBottom: "2%" }}
    >
      ❤️{" "}
    </Button>
  );
};

export default AddToFavouritesBtn;
