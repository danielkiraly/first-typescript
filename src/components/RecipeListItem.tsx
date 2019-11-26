import React from 'react';

interface RecipeListItemProps {
    recipe: {
        name: string,
        picture: string;
        ingredients: string;
    }
}

export const RecipeListItem: React.FC<RecipeListItemProps> = ({ recipe }) => {
    return <li>{recipe.name}</li>;
};