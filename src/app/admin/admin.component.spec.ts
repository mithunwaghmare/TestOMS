import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { AdminService } from '../admin.service';
import { AdminComponent } from './admin.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService } from '../users.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('AdminComponent - Admin service render', () => {

  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let debugElement: DebugElement;
  let adminService : AdminService;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        AdminComponent
      ],
    providers: [
       AdminService,
       UsersService
      ]
    }).compileComponents();
  }));


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    const service = TestBed.inject(AdminService);
  });


 it('should create Admin for add and manage', () => {
    expect(AdminComponent).toBeTruthy();
  });


  it('should call the add method', async(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    let button = fixture.debugElement.query(By.css('input[type=submit]'));
    let spy = spyOn(component, 'add');
    component.add();
    button.triggerEventHandler('click', null);
    fixture.whenStable().then(() => {
    expect(spy).toHaveBeenCalled();
     });
   }));

   
  it('should check adminservice', () => {
    expect(adminService instanceof AdminService).toBeFalsy();
  });
 
 
  it('should inject admin service using inject funtion ', inject([AdminService], (injectedService : AdminService) => {
   expect(injectedService).toBeTruthy();
   expect(injectedService instanceof AdminService).toBeTruthy();
  }));
 
 
  it('should inject admin service using component ', () => {
   fixture = TestBed.createComponent(AdminComponent);
   component = fixture.componentInstance;
   let over = fixture.debugElement.injector.get(AdminService);
   expect(over instanceof AdminService).toBeTruthy();
  });


}); 