import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Router, RouterLinkWithHref, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common'
import { routes } from './app-routing.module';

import { LoginformComponent } from './login/loginform/loginform.component';
import { SignupComponent } from './sign/signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { EditordersComponent } from './editorders/editorders.component';
import { UserpageComponent } from './userpage/userpage.component';
import { AuthGuard } from 'src/app/auth.guard';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminService } from './admin.service';
import { UsersService } from './users.service';

describe('AppComponent', () => {
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('project');
  });

});



// describe('AppComponent routing', () => {

//  let router: Router;
//  let component: AppComponent;
//  let fixture: ComponentFixture<AppComponent>;
//  let debugElement: DebugElement;
//  let location: Location;
//  let usersService: UsersService;

//  beforeEach(async(() => {
//   TestBed.configureTestingModule({
//     imports: [
//       RouterTestingModule.withRoutes(routes),
//       FormsModule
//     ],
//     declarations: [
//       AppComponent,
//       AdminComponent,
//       LoginformComponent,
//       SignupComponent,
//       EditordersComponent,
//       UserpageComponent,
//       AuthGuard
//     ],
//     providers: [AdminService, UsersService]
//    }).compileComponents();
//  }));


//  beforeEach(() => {

//   router = TestBed.get(Router);
//   location = TestBed.get(Location);
//   fixture = TestBed.createComponent(AppComponent);
//   debugElement = fixture.debugElement;
//   usersService = TestBed.get(UsersService);
  
//   router.initialNavigation();

//  });


//   beforeEach(() => {
//   fixture = TestBed.createComponent(AppComponent);
//   component = fixture.componentInstance;
// });


// //  it('it should redirect when default', async(() => {
// //      fixture.detectChanges();
// //      fixture.whenStable().then(() => {
// //        expect(location.path()).toBe('/signup');
// //    });
// //  }));


// //  it('should navigate when clicked login', fakeAsync(() => {
// //    fixture.detectChanges();
// //    let links = debugElement.queryAll(By.directive(RouterLinkWithHref));
// //    links[1].nativeElement.click();
// //    tick();
// //    expect(location.path()).toBe('/login');
// //  }));


// });