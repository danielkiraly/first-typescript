import React from 'react';
import styled from 'styled-components'; 

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
    return <RecipeListWrapper>{recipe.name}</RecipeListWrapper>;
};