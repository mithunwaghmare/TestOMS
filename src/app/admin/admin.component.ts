import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  adminForm: FormGroup;
  productData: any;

  profileForm: FormGroup;
  user: any;

  constructor(private adminserve: AdminService, private route: Router, private usersService: UsersService) { }

  columns = ["id", "userName", "type", "productName", "number", "email", "quantity", "orderdatetime", "deliverydatetime", "orderStatus",
    "doornum", "streetname", "city", "pincode"];


  ngOnInit(): void {

    this.getProd();
    this.profileForm = new FormGroup({
      userName: new FormControl(''),
      type: new FormControl(''),
      productName: new FormControl(''),
      number: new FormControl(''),
      email: new FormControl('',
        [
          Validators.required,
        ]
      ),
      quantity: new FormControl(''),
      orderdatetime: new FormControl(''),
      deliverydatetime: new FormControl(''),
      doornum: new FormControl(''),
      streetname: new FormControl(''),
      city: new FormControl(''),
      pincode: new FormControl(''),
      orderStatus: new FormControl(''),
    });
  }


  // add user and the products for user by admin
  add() {
    console.log(this.profileForm.value);
    this.adminserve.addProducts(this.profileForm).subscribe((response) => {
    });
  }


  // delete the added products for user by admin
  delete(id) {
    if (confirm("Are you sure to delete " + name)) {
      console.log("Implement delete functionality here");

      this.adminserve.deleteProdById(id).subscribe(response => {
        console.log(response);
        this.getProd()
      })
    }
  }


  // edit page - > while edit clicked moved to edit page to edit
edit(id) {
  this.route.navigate(['/editorders', id]);
}


// to get the product details in productdata for table display
  getProd() {
    this.adminserve.getProd().subscribe((response) => {
      this.productData = response
      console.log(response);
    });
  }

  
  // while the admin click for log out it moves to login page
  logout() {
    this.usersService.logout();
    this.route.navigate(['login']);
    }

}  
