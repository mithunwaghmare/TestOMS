import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './login/loginform/loginform.component';
import { SignupComponent } from './sign/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { UserpageComponent } from './userpage/userpage.component';
import { AdminComponent } from './admin/admin.component';
import { EditordersComponent } from './editorders/editorders.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    SignupComponent,
    AdminComponent,
    EditordersComponent,
    UserpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
