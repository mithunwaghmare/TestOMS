import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsersService } from './users.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';



describe('UsersService', () => {
  let service: UsersService;
  let httpClient : HttpClient;
  let httpTestCtrl : HttpTestingController;
  let userName

  beforeEach(() => TestBed.configureTestingModule({
   imports : [HttpClientTestingModule],
    providers : [UsersService]
  }));


 beforeEach(() => {
   service = TestBed.get(UsersService);
   httpTestCtrl = TestBed.get(HttpTestingController);
 });


 it('User Service should be created', () => {
    expect(UsersService).toBeTruthy();
  });


//  it('should test get method', () => {

  
//     service.getOneUser(userName).subscribe((posts) => {
//     expect(userName).toBe(posts, 'should check mock data');    
//     });

//     const req = httpTestCtrl.expectOne("http://localhost:3000/users?userName="+'posts'); 
//     expect(req.cancelled).toBeFalsy();
//     expect(req.request.responseType).toEqual('posts');
//  });




});
