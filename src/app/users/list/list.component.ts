import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserDTO } from '../../models/user.model';
import { AppState } from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import { loadUsers } from '../../store/actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styles: ``,
})
export class ListComponent implements OnInit, OnDestroy {
  public users: UserDTO[];
  public loading: boolean;
  public error: Error;
  private _usersSubscriptions!: Subscription;
  constructor(private _store: Store<AppState>) {
    this.users = [];
    this.loading = false;
    this.error = new Error();
  }

  ngOnInit(): void {
    this._usersSubscriptions = this._store
      .select('users')
      .subscribe(({ users, loading, error }) => {
        this.users = users;
        this.loading = loading;
        this.error = error;
      });
    this._store.dispatch(loadUsers());
  }

  ngOnDestroy(): void {
    this._usersSubscriptions.unsubscribe();
  }
}
