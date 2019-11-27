import React from 'react';
import styled from 'styled-components'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AddToCartButton from './AddToCartButton';
import AddToFavouritesBtn from './AddToFavouritesBtn';



interface RecipeListItemProps {
    recipe: {
        name: string,
        picture: string,
        ingredients: Array<String>,
        url: string
    }
}

// let RecipeListWrapper = styled.li`
//     font-size: 1.5em;
//     text-align: center;
//     color: palevioletred;
//     background: white;
//   `;


export const RecipeListItem: React.FC<RecipeListItemProps> = ({ recipe }) => {

    return <Card style={{ width: "28rem", opacity: "0.9", marginTop: "3%", 
    display: "inline-block" }}>
    <Card.Body>
        <Card.Img variant="top" src={recipe.picture} />
        <br></br>
        <Card.Title style={{marginTop: "2%"}}>{recipe.name}</Card.Title>
        <a href={recipe.url} style={{textDecoration: "none"}}>See the recipe</a>
        <br></br>
        <br></br>
        <AddToCartButton recipe={recipe} />
        <AddToFavouritesBtn recipe={recipe}/>
    </Card.Body>
    </Card>;
};