import React from 'react';

interface RecipeListItemProps {
    recipe: {
        picture: string;
        ingredients: string;
    }
}

export const RecipeListItem: React.FC<RecipeListItemProps> = ({ recipe }) => {
    return <li>{recipe.picture}</li>;
};