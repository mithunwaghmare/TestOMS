import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserpageComponent } from './userpage.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from '../users.service';
import { ReactiveFormsModule } from '@angular/forms';


describe('UserpageComponent', () => {

  let component: UserpageComponent;
  let fixture: ComponentFixture<UserpageComponent>;
  let usersService: UsersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        UserpageComponent
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
    fixture = TestBed.createComponent(UserpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    usersService = TestBed.get(UsersService);
    });

  
  it('should create', () => {
    expect(UserpageComponent).toBeTruthy();
  });


  it('should render header title', () => {
    const fixture = TestBed.createComponent(UserpageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.userheader').textContent).toContain('Here is the order created for you...!');
  });


  it('should check user service for user', () => {
    expect(usersService instanceof UsersService).toBeTruthy();
  });
 
 
  it('should inject user service using inject funtion for user', inject([UsersService], (injectedService : UsersService) => {
   expect(injectedService).toBeTruthy();
   expect(injectedService instanceof UsersService).toBeTruthy();
  }));
 
 
  it('should inject user service using component for user', () => {
   let over = fixture.debugElement.injector.get(UsersService);
   expect(over instanceof UsersService).toBeTruthy();
  });

}); 