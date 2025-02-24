import { createAction, props } from '@ngrx/store';
import { UserActionTypes } from './users.action-types';
import { UserDTO } from '../../models/user.model';

export const loadUsers = createAction(UserActionTypes.LOAD_USERS);

export const loadUsersSuccess = createAction(
  UserActionTypes.LOAD_USERS_SUCCESS,
  props<{ users: UserDTO[] }>()
);

export const loadUsersError = createAction(
  UserActionTypes.LOAD_USERS_ERROR,
  props<{ payload: Error }>()
);
