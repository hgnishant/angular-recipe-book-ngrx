import { Action } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.action"; //to rename is must
//provide a reducer
//2 arguments will be passed by ngrx
//current state before it was changed, action that triggers reducer and state updates

//
const initialState = {
  ingredients: [new Ingredient("Apples", 5), new Ingredient("Tomatoes", 10)],
};

//assign default value to state
//Action is ian Interface which enforces "type" property
export function shoppingListReducer(state = initialState, action: ShoppingListActions.AddIngredient) {
  //find out the type of action and modify the state
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      //return new state now, never modify the existing state
      //use spread operator to copy the old state and then old ingredients
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
      default :
      return state;//return the original unchanged state
  }
}
