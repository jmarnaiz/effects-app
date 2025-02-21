import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styles: ``,
})
export class NavbarComponent {
  constructor(private _router: Router) {}

  redirectUser(id: string) {
    if (!id) {
      return;
    }

    this._router.navigate(['/user', id]);
  }
}
