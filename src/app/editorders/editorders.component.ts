import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { UsersService } from 'src/app/users.service';
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-editorders',
  templateUrl: './editorders.component.html',
  styleUrls: ['./editorders.component.css']
})
export class EditordersComponent implements OnInit {

  editForm: FormGroup;
  ed: number;
  var: any;


  constructor(private router: ActivatedRoute, private service: AdminService, private usersservice: UsersService, private route: Router) { }

  ngOnInit(): void {

    this.editForm = new FormGroup({
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
      orderStatus: new FormControl('')
    });

    this.router.paramMap.subscribe(response => {
      this.ed = +response.get('id')
      console.log(this.ed);
      this.service.getProdById(this.ed).subscribe(response => {
        this.var = response
        console.log(this.var);
        
        this.editForm = new FormGroup({
          userName: new FormControl(this.var.userName),
          type: new FormControl(this.var.type),
          productName: new FormControl(this.var.productName),
          number: new FormControl(this.var.number),
          email: new FormControl(this.var.email, 
            [  Validators.required ]
          ),
          quantity: new FormControl(this.var.quantity),
          orderdatetime: new FormControl(this.var.orderdatetime),
          deliverydatetime: new FormControl(this.var.deliverydatetime),
          doornum: new FormControl(this.var.doornum),
          streetname: new FormControl(this.var.streetname),
          city: new FormControl(this.var.city),
          pincode: new FormControl(this.var.pincode),
          orderStatus: new FormControl(this.var.orderStatus)
        });

       

      })
    })
  }


  // change the entered user details and products
  changes() {
    
    console.log("hi");
    console.log(this.editForm.value,this.ed);
    this.service.updateProd(this.editForm,this.ed).subscribe((response) => {
      this.route.navigate(['admin', this.editForm])
    });
  }

}
