import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserDTO } from '../models/user.model';
import { ResponseDTO } from '../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _url = 'https://reqres.in/api';

  constructor(private _http: HttpClient) {}

  getUsers(): Observable<UserDTO[]> {
    return this._http
      .get<ResponseDTO>(this._url.concat('/users?per_page=6'))
      .pipe(map((response) => response.data));
  }
}
