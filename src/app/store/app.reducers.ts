import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
  users: reducers.UsersState;
  user: reducers.UserState;
}

export const appReducer: ActionReducerMap<AppState> = {
  users: reducers.usersReducer,
  user: reducers.userReducer,
};
