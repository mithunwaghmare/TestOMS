import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  productData: any;
  profileForm: FormGroup;
  username: string;
  pro: any;

  constructor(private adminserve: AdminService, private route: Router, private usersService: UsersService, private router: ActivatedRoute) { }

  columns = ["id", "userName", "type", "productName", "number", "email", "quantity", "orderdatetime", "deliverydatetime", "orderStatus",
    "doornum", "streetname", "city", "pincode"];

  ngOnInit(): void {

    this.getProd();

    this.profileForm = new FormGroup({
      userName: new FormControl(''),
      type: new FormControl(''),
      productName: new FormControl(''),
      number: new FormControl(''),
      email: new FormControl(''),
      quantity: new FormControl(''),
      orderdatetime: new FormControl(''),
      deliverydatetime: new FormControl(''),
      doornum: new FormControl(''),
      streetname: new FormControl(''),
      city: new FormControl(''),
      pincode: new FormControl(''),
      orderStatus: new FormControl('')
    });

    this.router.paramMap.subscribe(params => {
      this.username = params.get('un');
      console.log(this.username)
    });
  }

// get product and match with the username and displays
  getProd() {
    this.adminserve.getProd().subscribe((response) => {
      this.productData = response
      console.log(response);

      this.pro = this.adminserve.getOneUserProd(this.productData, this.username)
    });
  }

  logout() {
    this.usersService.logout();
    this.route.navigate(['login']);
  }

}
