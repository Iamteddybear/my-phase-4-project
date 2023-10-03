import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import RecipesList from './components/RecipesList';
import RecipeDetail from './components/RecipeDetail';
import RecipeForm from './components/RecipeForm';
import UserRegister from './components/UserRegister';
import UserLogin from './components/UserLogin';

function App() {
  // State to store the recipes
  const [recipes, setRecipes] = useState([
    { id: 1, name: "Spaghetti", ingredients: ["Pasta", "Tomatoes", "Garlic"], instructions: "Boil pasta. Prepare sauce. Mix together." },
    { id: 2, name: "Pizza", ingredients: ["Dough", "Cheese", "Tomato Sauce"], instructions: "Bake dough. Add toppings. Serve." },
    { id: 3, name: "Salad", ingredients: ["Lettuce", "Tomatoes", "Cucumber"], instructions: "Chop veggies. Mix. Serve." }
  ]);

const addRecipe = (recipeData) => {
  const newRecipe = {
    id: recipes.length + 1, 
    name: recipeData.name,
    ingredients: recipeData.ingredients,
    instructions: recipeData.instructions
  };
  setRecipes([...recipes, newRecipe]);
};

  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/add-recipe">Add Recipe</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </nav>
        
        <Switch>
          {/* Pass both the recipes data and delete function to RecipesList */}
          <Route path="/recipes">
            <RecipesList recipes={recipes} onDeleteRecipe={deleteRecipe} />
          </Route>

          {/* Pass the addRecipe function to RecipeForm */}
          <Route path="/add-recipe">
            <RecipeForm onAddRecipe={addRecipe} />
          </Route>
          
          {/* Pass the recipes to RecipeDetail */}
          <Route path="/recipe/:id">
            <RecipeDetail recipes={recipes} />
          </Route>

          <Route path="/register" component={UserRegister} />
          <Route path="/login" component={UserLogin} />
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <h1>Home Page</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
