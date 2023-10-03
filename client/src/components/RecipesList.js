import React from 'react';
import { Link } from 'react-router-dom';

function RecipesList({ recipes, onDeleteRecipe }) {
  return (
    <div>
      <h2>All Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
            <button className="delete-button" onClick={() => onDeleteRecipe(recipe.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipesList;
