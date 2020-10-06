import { Component, OnInit, OnDestroy } from '@angular/core';
import { observable, Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model';
//import { ShoppingListService } from './shopping-list.service';
import { LoggingService } from '../logging.service';
import * as fromShoppingList from './store/shopping-list.reducer'; //as per convention "fromShoppingList" is used
import * as ShoppingListActions from './store/shopping-list.action'; 

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ingredients : Ingredient[]}>;
  private subscription: Subscription;

  constructor(
   // private slService: ShoppingListService,
    private loggingService: LoggingService,
    private store : Store<fromShoppingList.AppState>
    //private store : Store<{ShoppingList : {ingredients : Ingredient[]}}> AppState is used now and this is commented out
  ) {}
  //ShoppingList must be teh same name as u registerd in app.module.ts file
  //ingredients must be the same name as in reducer.This defines the store (initial state)

  ngOnInit() {

    this.ingredients=this.store.select("shoppingList"); //it gives  a slice
    console.log('this.store :'+ this.store);
    // if u don't want to use "async" in template and want to return array like 
    // before then u can subscribe to it as it's an observable this.store.select('ShoppingList').subscribe()

    //code below is not needed now after adding ngrx
    // this.ingredients = this.slService.getIngredients();
    // this.subscription = this.slService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //    this.ingredients = ingredients;
    //   }
    // );

    this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit!');
  }

  onEditItem(index: number) {
   // this.slService.startedEditing.next(index);
   this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  ngOnDestroy() {
   // this.subscription.unsubscribe();
  }
}
