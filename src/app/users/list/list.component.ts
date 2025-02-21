import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserDTO } from '../../models/user.model';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styles: ``,
})
export class ListComponent implements OnInit {
  public users: UserDTO[];
  constructor(private _userService: UserService) {
    this.users = [];
  }

  ngOnInit(): void {
    this._userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
