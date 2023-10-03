import React from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail({ recipes }) {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h2>{recipe.name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
