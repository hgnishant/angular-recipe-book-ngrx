import { Action } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_INGREDIENTS = "ADD_INGREDIENTS";
export const UPDATE_INGREDIENT = "UPDATE_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  //u can use any other name than payload
  constructor(public payload: Ingredient) {}
}

export class AddIngredients implements Action {
  readonly type = ADD_INGREDIENTS;
  //u can use any other name than payload
  constructor(public payload: Ingredient[]) {}
}

export class UpdateIngredient implements Action {
  readonly type = UPDATE_INGREDIENT;
  //u can use any other name than payload
  constructor(public payload: {index: number, newIngredient: Ingredient}) {}
}

export class DeleteIngredient implements Action {
  readonly type = DELETE_INGREDIENT;
  //u can use any other name than payload
  constructor(public payload: number) {}
}
//define your own type be union of all the exported classes
export type ShoppingListActions = AddIngredient | AddIngredients | UpdateIngredient | DeleteIngredient;