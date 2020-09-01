import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { EditordersComponent } from './editorders.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminService } from '../admin.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('EditordersComponent', () => {
  
  let component: EditordersComponent;
  let fixture: ComponentFixture<EditordersComponent>;
  let adminService : AdminService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [ 
        EditordersComponent 
      ],
    providers: [
       AdminService
      ]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    const service = TestBed.inject(AdminService);
  });


  it('should create Edit orders', () => {
    expect(EditordersComponent).toBeTruthy();
  });

  it('should check adminservice in editorders', () => {
    expect(adminService instanceof AdminService).toBeFalsy();
  });
 
 
  it('should inject admin service using inject funtion in editorders', inject([AdminService], (injectedService : AdminService) => {
   expect(injectedService).toBeTruthy();
   expect(injectedService instanceof AdminService).toBeTruthy();
  }));
 
 
  it('should inject admin service using component for editorders', () => {
   fixture = TestBed.createComponent(EditordersComponent);
   component = fixture.componentInstance;
   let over = fixture.debugElement.injector.get(AdminService);
   expect(over instanceof AdminService).toBeTruthy();
  });

});
