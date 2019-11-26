import React from 'react';
import { RecipeListItem } from './RecipeListItem';


interface Recipe {
    picture: string,
    ingredients: string
};

interface RecipeListProp {
    recipes: Array<Recipe>;
}

export const RecipeList: React.FC<RecipeListProp> = ({ recipes }) => {
    return <ul>{recipes.map(recipe => {
        return <RecipeListItem recipe={recipe}/>
    })}</ul>
}