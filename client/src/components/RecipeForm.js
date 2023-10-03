import React, { useState } from 'react';

function RecipeForm({ onAddRecipe }) {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    onAddRecipe({
      name,
      ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
      instructions
    });

    // Clear the form inputs
    setName('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Recipe Name:
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Ingredients (comma separated):
        <input value={ingredients} onChange={e => setIngredients(e.target.value)} />
      </label>
      <br />
      <label>
        Instructions:
        <textarea value={instructions} onChange={e => setInstructions(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default RecipeForm;
