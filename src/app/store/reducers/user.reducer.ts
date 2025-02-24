import { createReducer, on } from '@ngrx/store';
import * as userActions from '../actions';
import { EMPTY_USER, UserDTO } from '../../models/user.model';

export interface UserState {
  id: number;
  user: UserDTO;
  loaded: boolean;
  loading: boolean;
  error: Error;
}

const userInitialState: UserState = {
  id: -1,
  user: EMPTY_USER,
  loaded: false,
  loading: false,
  error: new Error(),
};

export const userReducer = createReducer(
  userInitialState,
  on(userActions.loadUser, (state, { id }) => ({
    ...state,
    loading: true,
    id,
  })),
  on(userActions.loadUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    loaded: true,
    user,
  })),
  on(userActions.loadUserError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      name: payload.name,
      message: payload.message,
    },
  }))
);
