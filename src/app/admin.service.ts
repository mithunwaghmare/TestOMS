import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(private httpClient: HttpClient) { }


  // admin- add() -> add products for the customers by admin 
  addProducts(profileForm) {

    let productsAdd: any = {
      userName: profileForm.value.userName,
      type: profileForm.value.type,
      productName: profileForm.value.productName,
      number: profileForm.value.number,
      email: profileForm.value.email,
      quantity: profileForm.value.quantity,
      orderdatetime: profileForm.value.orderdatetime,
      deliverydatetime: profileForm.value.deliverydatetime,
      doornum: profileForm.value.doornum,
      streetname: profileForm.value.streetname,
      city: profileForm.value.city,
      pincode: profileForm.value.pincode,
      orderStatus: profileForm.value.orderStatus,
      transport: profileForm.value.transport,
    };
    return this.httpClient.post("http://localhost:3000/products", productsAdd)
  }


  // admin - delete() -> called in delete() for delete by id
  deleteProdById(id) {
    return this.httpClient.delete("http://localhost:3000/products/" + id)
  }

  
  //editpage - edit() -> used in edit component to update the already entered details
  updateProd(editForm, id) {

    let productsAdd: any = {
      id: id,
      userName: editForm.value.userName,
      type: editForm.value.type,
      productName: editForm.value.productName,
      number: editForm.value.number,
      email: editForm.value.email,
      quantity: editForm.value.quantity,
      orderdatetime: editForm.value.orderdatetime,
      deliverydatetime: editForm.value.deliverydatetime,
      doornum: editForm.value.doornum,
      streetname: editForm.value.streetname,
      city: editForm.value.city,
      pincode: editForm.value.pincode,
      orderStatus: editForm.value.orderStatus
    };
    console.log(productsAdd)
    return this.httpClient.put("http://localhost:3000/products/" + id, productsAdd)
  }


  // admin - delete() - getprod() -> get the products from the json 
  // userpage - to get the details
  getProd() {
    return this.httpClient.get("http://localhost:3000/products")
  }


  //edit() ->  we are getting products added by using the id
  getProdById(id) {
    return this.httpClient.get("http://localhost:3000/products/" + id)
  }


  // userpage - > gets and display the details matches with the login of user
  getOneUserProd(productlist, userName) {
    
    let filter = userName.toLowerCase();
    return productlist.filter((products) => products.userName.toLowerCase().indexOf(filter) != -1);
  }

}
