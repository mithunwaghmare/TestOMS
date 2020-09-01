import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UsersService {

  guardstatus: boolean = false

  constructor(private httpClient: HttpClient) { }


  //signup() -> get data from json to check whether the user is already present or not
  getOneUser(userName) {

    return this.httpClient.get("http://localhost:3000/users?userName=" + userName)
  }


  //signup() -> no existing user so add the user to the json
  addUser(profileForm) {
    let signUpUser: any = {
      userName: profileForm.value.userName,
      password: profileForm.value.pass,
      email: profileForm.value.email,
    };
    return this.httpClient.post("http://localhost:3000/users", signUpUser)
  }

  // login method for admin and user
  login() {
    this.guardstatus = true
  }

  logout() {
    this.guardstatus = false
  }

}
