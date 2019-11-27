import Button from 'react-bootstrap/Button';
import React from 'react';
import axios from 'axios';


 
const AddToFavouritesBtn = (recipe: any) => {
    const addToFavouritesHandler = () => {
        axios({
            method: 'post',
            url: 'http://localhost:8080/save-to-favourite',
            data: {
              name: recipe.recipe.name,
              ingredients: recipe.recipe.ingredients,
              picture: recipe.recipe.picture,
              url: recipe.recipe.url
            }
          })
          .then((response) => {
              alert(recipe.recipe.name + " has been saved! ORBÁN A KIRÁLY")
          })
    }

    return ( 
        <Button onClick={addToFavouritesHandler} variant="light" style={{float: "right", marginRight: "20%", marginBottom: "2%"}}>❤️ </Button>
    );
}
 
export default AddToFavouritesBtn;