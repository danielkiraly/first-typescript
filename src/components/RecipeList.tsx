import React from 'react';
import { RecipeListItem } from './RecipeListItem';
import { unlinkSync } from 'fs';

interface Recipe {
    name: string,
    picture: string,
    ingredients: Array<String>
};

interface RecipeListProp {
    recipes: Array<Recipe>;
}


export const RecipeList: React.FC<RecipeListProp> = ({ recipes }) => {
    return <li>{recipes.map(recipe => {
        return <RecipeListItem key={recipe.name} recipe={recipe}/>
    })}</li>
}