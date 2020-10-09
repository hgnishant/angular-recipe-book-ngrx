//to merge all the reducers

import * as fromShoppingList from "../shopping-list/store/shopping-list.reducer";
import * as fromAuth from "../auth/store/auth.reducer";
import { ActionReducerMap } from "@ngrx/store";
import * as fromRecipes from '../recipes/store/recipe.reducer';

//this interface was created in shopping-list/store/shopping-list.reducer
//becuase then it was the only reducer
//but as we are having more than one reducers, we need to maintain AppState
//on root level
export interface AppState {
  //this appState is for application level
  shoppingList: fromShoppingList.State;
  auth: fromAuth.State;
  recipes: fromRecipes.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  shoppingList: fromShoppingList.shoppingListReducer,
  auth: fromAuth.authReducer,
  recipes: fromRecipes.recipeReducer
};
