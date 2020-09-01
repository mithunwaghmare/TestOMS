import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginformComponent } from './login/loginform/loginform.component';
import { SignupComponent } from './sign/signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { EditordersComponent } from './editorders/editorders.component';
import { UserpageComponent } from './userpage/userpage.component';
import { AuthGuard } from 'src/app/auth.guard';


export const routes: Routes = [

  { path: "", component: SignupComponent },
  { path: "login", component: LoginformComponent },
  { path: 'login/:err', component: LoginformComponent },
  { path: "admin", component: AdminComponent, canActivate:[AuthGuard]},
  { path: "editorders/:id", component: EditordersComponent, canActivate:[AuthGuard]},
  { path: "userpage/:un", component: UserpageComponent, canActivate:[AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
