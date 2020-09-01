import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { SignupComponent } from './signup.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { UsersService } from '../../users.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('SignupComponent', () => {

  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        SignupComponent
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
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   });
  
   
  it('should create signup', () => {
    expect(SignupComponent).toBeTruthy();
  });

  it('should render header title', () => {
    const fixture = TestBed.createComponent(SignupComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.signupheader').textContent).toContain(' ORDER MANAGEMENT SYSTEM');
  });


  it('should check signUp is valid', () => {
    expect(component.profileForm.valid).toBeFalsy();
   });


   it('should check signUp values all entered', () => {
    component.profileForm.controls['userName'].setValue('arun');
    component.profileForm.controls['pass'].setValue('Arun@12345');
    component.profileForm.controls['email'].setValue('arun@gmail.com');
    expect(component.profileForm.valid).toBeFalsy();
   });


   
   it('should check signUp one values not entered', () => {
    component.profileForm.controls['userName'].setValue('arun');
    component.profileForm.controls['pass'].setValue('Arun@12345');
    expect(component.profileForm.valid).toBeFalsy();
   });


   it('should check the email form required', () => {
    let email = component.profileForm.controls['email'];
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    expect(email.errors['required']).toBeTruthy();
   });


  it('should check the password form required', () => {
    let pass = component.profileForm.controls['pass'];
    expect(pass.valid).toBeFalsy();
    expect(pass.pristine).toBeTruthy();
    expect(pass.errors['required']).toBeTruthy();
   });


   it('should check the username', () => {
    let name = component.profileForm.controls['userName'];
    expect(name.pristine).toBeTruthy();
    expect(name).toBeTruthy();
 });

 
   it('should check the email address is valid or not', () => {
    let email = component.profileForm.controls['email'];
    email.setValue('abc@gmail.com');
    expect(email.errors).toBeNull();
   });

 
 it('should check the password of signUp valid', () => {
   let pass = component.profileForm.controls['pass'];
   expect(pass.errors['required']).toBeTruthy();
  });


});


describe('Sign up - user services ', () => {

  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
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
        SignupComponent
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
   fixture = TestBed.createComponent(SignupComponent);
   component = fixture.componentInstance;
   fixture.detectChanges();
   usersService = TestBed.get(UsersService);
   });


 it('should check user service for signup', () => {
   expect(usersService instanceof UsersService).toBeTruthy();
 });


 it('should inject user service using inject funtion for signup', inject([UsersService], (injectedService : UsersService) => {
  expect(injectedService).toBeTruthy();
  expect(injectedService instanceof UsersService).toBeTruthy();
 }));


 it('should inject user service using component for signup', () => {
  let over = fixture.debugElement.injector.get(UsersService);
  expect(over instanceof UsersService).toBeTruthy();
 });

}); 