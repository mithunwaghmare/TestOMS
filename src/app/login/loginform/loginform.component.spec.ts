import { async, ComponentFixture, TestBed, tick, inject } from '@angular/core/testing';
import { LoginformComponent } from './loginform.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { UsersService } from '../../users.service';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';
import { Location } from '@angular/common';


describe('LoginformComponent', () => {

  let component: LoginformComponent;
  let fixture: ComponentFixture<LoginformComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        LoginformComponent
      ],
    }).compileComponents();
  }));

  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    const service = TestBed.inject(UsersService);
  });

  
  beforeEach(() => {
   fixture = TestBed.createComponent(LoginformComponent);
   component = fixture.componentInstance;
   fixture.detectChanges();
  });
  

  it('should create login form', () => {
    expect(LoginformComponent).toBeTruthy();
  });


 it('should check the username', () => {
   let name = component.profileForm.controls['userName'];
   expect(name.valid).toBeFalsy();
   expect(name.pristine).toBeTruthy();
   expect(name.errors['required']).toBeTruthy();
 });


 it('should check the password', () => {
  let pass = component.profileForm.controls['pass'];
  expect(pass.errors['required']).toBeTruthy();
 });


 it('should check whether admin', () => {
  let name = component.profileForm.controls['userName'];
  name.setValue('admin');
  expect(name.errors).toBeNull(); 
 });

 it('should check whether admin password', () => {
  let password = component.profileForm.controls['pass'];
  password.setValue('Admin@12345');
  expect(password.errors).toBeNull(); 
 });


it('should check form is valid', () => {
 expect(component.profileForm.valid).toBeFalsy();
});


it('should check form is valid when values are entered', () => {
  component.profileForm.controls['userName'].setValue('arun');
  component.profileForm.controls['pass'].setValue('Arun@12345');
  expect(component.profileForm.valid).toBeTruthy();
 });
 

 it('should check form is submitted', () => {
  expect(component.profileForm.invalid).toBeTruthy();
  let button = fixture.debugElement.query(By.css('input[type=submit]'));
  component.profileForm.controls['userName'].setValue('arun');
  component.profileForm.controls['pass'].setValue('Arun@12345');
  fixture.detectChanges();
  expect(button.nativeElement.disabled).toBeFalsy();
 });

});



describe('loginform - submit validations and services ', () => {

  let component: LoginformComponent;
  let fixture: ComponentFixture<LoginformComponent>;
  let router: Router;
  let debugElement: DebugElement;
  let el: HTMLElement;
  let location: Location;
  let usersService: UsersService;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        LoginformComponent
      ],
      providers: [
        UsersService
      ]
    }).compileComponents();
  }));

  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    const service = TestBed.inject(UsersService);
  });

  
  beforeEach(() => {
   fixture = TestBed.createComponent(LoginformComponent);
   component = fixture.componentInstance;
   fixture.detectChanges();
   usersService = TestBed.get(UsersService);
   });


 it('should check when form is submitted', () => {
  expect(component.profileForm.invalid).toBeTruthy();
  let button = fixture.debugElement.query(By.css('input[type=submit]'));
  component.profileForm.controls['userName'].setValue('admin');
  component.profileForm.controls['pass'].setValue('Admin@12345');
  fixture.detectChanges();
  let spy = spyOn(component, 'loginfun');
  component.loginfun();
  button.triggerEventHandler('click', null);
  fixture.whenStable().then(() => {
  expect(spy).toHaveBeenCalled();
  });
 });


 it(`should call the click method`, async(() => {
  spyOn(component, 'loginfun');
  el = fixture.debugElement.query(By.css('input[type=submit]')).nativeElement;
  el.click();
  component.loginfun();
  expect(component.loginfun).toHaveBeenCalled();
 }));


 it('should check user service for login', () => {
   expect(usersService instanceof UsersService).toBeTruthy();
 });


 it('should inject user service using inject funtion for login', inject([UsersService], (injectedService : UsersService) => {
  expect(injectedService).toBeTruthy();
  expect(injectedService instanceof UsersService).toBeTruthy();
 }));


 it('should inject user service using component for login', () => {
  let over = fixture.debugElement.injector.get(UsersService);
  expect(over instanceof UsersService).toBeTruthy();
 });

}); 