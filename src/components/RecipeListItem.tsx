import React from 'react';
import styled from 'styled-components'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardImg from 'react-bootstrap/Card';



interface RecipeListItemProps {
    recipe: {
        name: string,
        picture: string;
        ingredients: string;
    }
}

let RecipeListWrapper = styled.li`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    background: white;
  `;




export const RecipeListItem: React.FC<RecipeListItemProps> = ({ recipe }) => {

    return <Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Img variant="top" src={recipe.picture} />
        <Card.Title>{recipe.name}</Card.Title>
            ORBÁN A KIRÁLY
       <Button variant="primary">Add to shopping cart</Button>
       <Button variant="primary">Add to favourites</Button>
    </Card.Body>

    </Card>;
};