import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usersActions from '../actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { UserService } from '../../services/user.service';

@Injectable()
export class UserEffects {
  private _actions$ = inject(Actions);
  private _usersService = inject(UserService);

  loadUser$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(usersActions.loadUser),
      // Aquí obtengo la acción, que tiene type e id
      exhaustMap(({ id }) =>
        this._usersService.getUserById(id).pipe(
          map((user) => usersActions.loadUserSuccess({ user })),
          catchError((err) => of(usersActions.loadUserError({ payload: err })))
        )
      )
    );
  });
}
