import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { loadUser } from '../../store/actions';
import { Subscription } from 'rxjs';
import { EMPTY_USER, UserDTO } from '../../models/user.model';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styles: ``,
})
export class UserComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[];
  public user: UserDTO;
  constructor(
    private _router: ActivatedRoute,
    private _store: Store<AppState>
  ) {
    this._subscriptions = [];
    this.user = EMPTY_USER;
  }

  ngOnInit(): void {
    this._subscriptions.push(
      this._store.select('user').subscribe(({ user }) => {
        this.user = user;
      })
    );
    this._subscriptions.push(
      this._router.params.subscribe(({ id }) => {
        this._store.dispatch(loadUser({ id }));
      })
    );
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((sub) => sub.unsubscribe);
  }
}
