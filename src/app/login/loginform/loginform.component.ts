import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/users.service';
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  userobj: any
  errmsg: boolean = false
  nullvar: boolean = false

  profileForm: FormGroup;
  signupStatus: string = "abc";


  constructor(private router: ActivatedRoute, private usersService: UsersService, private route: Router) { }

  ngOnInit(): void {

    this.profileForm = new FormGroup({
      userName: new FormControl(''),
      pass: new FormControl('',
        [
          Validators.required,
        ]
      )
    });

    this.router.paramMap.subscribe(params => {
      this.signupStatus = params.get('err');
    })

  }


  loginfun() {
    
    console.log(this.profileForm.value);
    if (this.profileForm.value.userName == "") {
      this.nullvar = true
    }
    else {

       if (this.profileForm.value.userName == 'admin') {
        if (this.profileForm.value.pass == 'Admin@12345') {
          this.usersService.login();
          this.route.navigate(['admin']);
         }
         else {
          this.errmsg = true;
         }
       }
       else {
          this.usersService.getOneUser(this.profileForm.value.userName).subscribe((response) => {
            this.userobj = response[0]
            let un = this.userobj.userName
            console.log(this.userobj);
            console.log(this.userobj.password);
            console.log(this.profileForm.value.pass);
            if (this.userobj.password == this.profileForm.value.pass) {
              this.usersService.login();
              this.route.navigate(['/userpage', un])
            }
          });
        }
      }

    }
  }

