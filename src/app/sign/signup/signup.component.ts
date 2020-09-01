import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../users.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  profileForm: FormGroup;
  user: any;


  constructor(private userService: UsersService, private route: Router) { }


  ngOnInit() {
    this.profileForm = new FormGroup({
      userName: new FormControl(''),
      email: new FormControl('',
        [
          Validators.required,
        ]
      ),
      pass: new FormControl('',
        [
          Validators.required,
        ]
      ),
      repass: new FormControl(''),
    });
  }

  signup(profileForm) {
    console.log(profileForm.value.userName);
    this.userService.getOneUser(profileForm.value.userName).subscribe((response) => {
      this.user = response
      // not sign up user
      console.log(response);

      if (this.user.length == 0) {
        this.userService.addUser(profileForm).subscribe((response) => {
          this.route.navigate(['login', "true"]);
          console.log(response)
        });
      }

      else {
        this.route.navigate(['login', "false"]);
      }
      console.log(this.user.length)
    });
  }
}