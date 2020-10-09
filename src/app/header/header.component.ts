import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";
import * as fromApp from "../store/app.reducer";
import * as AuthActions from "../auth/store/auth.action";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    // this.userSub = this.authService.user.subscribe(user => {
     // console.log('this.store= '+this.store.select('auth').pipe());
    this.userSub = this.store
      .select('auth')
      // .pipe(
      //   map((authState) => {
      //     console.log ('authstate = '+authState);
      //     return authState.user;
      //   })
      // )
      .subscribe((authState) => {
        this.isAuthenticated = !!authState.user;
        console.log(!!authState.user);
        console.log(!!!authState.user);
      });
  }

  
  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
  //  this.authService.logout();
  this.store.dispatch(new AuthActions.Logout());
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
