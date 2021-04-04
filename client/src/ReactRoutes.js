import React from 'react';
import {  BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import RecipeView from './Components/RecipeView/RecipeView';
const ReactRouter = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path ='/' component={HomePage} />
        <Route exact path ='/recipeView' component={RecipeView} />
      </Switch>
    </BrowserRouter>
  )
}


export default ReactRouter