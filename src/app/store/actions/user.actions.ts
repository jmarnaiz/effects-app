import { createAction, props } from '@ngrx/store';
import { UserActionTypes } from './users.action-types';
import { UserDTO } from '../../models/user.model';

export const loadUser = createAction(
  UserActionTypes.LOAD_USER,
  props<{ id: number }>()
);

export const loadUserSuccess = createAction(
  UserActionTypes.LOAD_USER_SUCCESS,
  props<{ user: UserDTO }>()
);

export const loadUserError = createAction(
  UserActionTypes.LOAD_USER_ERROR,
  props<{ payload: Error }>()
);
