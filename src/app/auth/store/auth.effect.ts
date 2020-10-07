import { Actions, ofType } from "@ngrx/effects";
import * as AuthActions from './auth.action';

//Actions is an observable which has access to all the dispatched actions but it reacts a bit differently
//adding $ at the end of observables is preferable

export class AuthEffects {
  //ofType is special operator, allows to define a filter where u define for which
  //effects u want to create this particular pipe stream
  authLogin = this.actions$.pipe(ofType(AuthActions.LOGIN_START));

  constructor(private actions$: Actions) {}
}
