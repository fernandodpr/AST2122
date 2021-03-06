/*
  METODOS USADOS DE FORMA INDIRECTA POR LA PAGINA HTML EN JUEGOCOMPONENT
*/

import {Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient){}
  URL_API = 'http://localhost:3003/api/user';

  selectedUser: User = {
    _id: "",
    rol: "",
    username:""
  };

  usuarios: User[] = [];

  sumidero: string = "";
  sumidero2: string = "";

  getUsers(){
    return this.http.get<User[]>(this.URL_API);
  }

  getUser(id: string){
    return this.http.get<User>(`${this.URL_API}/${id}`);
  }

  createUser(user: User){
    delete user._id;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.URL_API, user,{ headers,responseType: 'text'});
  }

  deleteUser(_id: string){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.delete(`${this.URL_API}/${_id}`,{ headers,responseType: 'text'});
  }
}
