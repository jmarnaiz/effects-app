import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usersActions from '../actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { UserService } from '../../services/user.service';

@Injectable()
export class UsersEffects {
  private _actions$ = inject(Actions);
  private _usersService = inject(UserService);

  loadUsers$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(usersActions.loadUsers),
      //   tap((data) => console.log('Effect tap: ', data)),
      exhaustMap(() =>
        this._usersService.getUsers().pipe(
          //   tap((data) => console.log('getUsers effect: ', data)),
          map((users) => usersActions.loadUsersSuccess({ users })),
          catchError((err) => of(usersActions.loadUsersError({ payload: err })))
        )
      )
    );
  });
}

// exhaustMap toma el observable anterior y lo mezcla generando uno nuevo
// map aplicará esa función al valor emitido por el Observable, que en
// este caso, es el array de usuarios
