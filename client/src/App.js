import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import RecipesList from './components/RecipesList';
import RecipeDetail from './components/RecipeDetail';
import RecipeForm from './components/RecipeForm';
import UserRegister from './components/UserRegister';
import UserLogin from './components/UserLogin';
function App() {
 
  const [recipes, setRecipes] = useState([
    { id: 1, name: "Spaghetti", ingredients: ["Pasta", "Tomatoes", "Garlic"], instructions: "Boil pasta. Prepare sauce. Mix together." },
    { id: 2, name: "Pizza", ingredients: ["Dough", "Cheese", "Tomato Sauce"], instructions: "Bake dough. Add toppings. Serve." },
    { id: 3, name: "Salad", ingredients: ["Lettuce", "Tomatoes", "Cucumber"], instructions: "Chop veggies. Mix. Serve." }
  ]);

  // User state and functions
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const registerUser = (username, password) => {
    const newUser = { username, password };
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
  };

  const loginUser = (username, password) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const logoutUser = () => {
    setCurrentUser(null);
  };

  // Recipe functions
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
          {currentUser ? (
            <>
              <span>Welcome, {currentUser.username}!</span>
              <button onClick={logoutUser}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </nav>
        
        <Switch>
          {/* Recipe routes */}
          <Route path="/recipes">
            <RecipesList recipes={recipes} onDeleteRecipe={deleteRecipe} />
          </Route>
          <Route path="/add-recipe">
            <RecipeForm onAddRecipe={addRecipe} />
          </Route>
          <Route path="/recipe/:id">
            <RecipeDetail recipes={recipes} />
          </Route>

          {/* User routes */}
          <Route path="/register">
            {currentUser ? <Redirect to="/" /> : <UserRegister onRegister={registerUser} />}
          </Route>
          <Route path="/login">
            {currentUser ? <Redirect to="/" /> : <UserLogin onLogin={loginUser} />}
          </Route>

          {/* Other routes */}
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