import { createReducer, on } from '@ngrx/store';
import * as userActions from '../actions';
import { UserDTO } from '../../models/user.model';

export interface UsersState {
  users: UserDTO[];
  loaded: boolean;
  loading: boolean;
  error: Error;
}

const usersInitialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: new Error(),
};

export const usersReducer = createReducer(
  usersInitialState,
  on(userActions.loadUsers, (state) => ({ ...state, loading: true })),
  on(userActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...users],
  })),
  on(userActions.loadUsersError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      name: payload.name,
      message: payload.message,
    },
  }))
);
