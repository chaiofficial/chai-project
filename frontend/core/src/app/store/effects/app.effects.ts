import { Actions, Effect, ofType } from '@ngrx/effects';
import { AppActions } from '../actions/app.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class AppEffects {

  // constructor(
  //   private actions$: Actions
  // ) { }

  // @Effect()
  // createFile$ = this.actions$.pipe(
  //   ofType(AppActions.SET_FLAG),
  //   switchMap((action: { type: any; payload: any }) => {
  //     return this.repository.post(action.payload.body).pipe(
  //       map(response => ({
  //         type: AppActions.SET_FLAG,
  //         payload: response,
  //       })),
  //       catchError((error: any) => {
  //         return of({
  //           type: AppActions.SET_FLAG,
  //           payload: error,
  //         });
  //       })
  //     );
  //   })
  // );
}
