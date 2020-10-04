import { Action } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";

export const ADD_INGREDIENT = "ADD_INGREDIENT";

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  //u can use any other name than payload
  constructor(public payload: Ingredient) {}
}
