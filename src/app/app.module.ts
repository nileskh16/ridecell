import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './userAccounts/login/login.component';
import { SignupComponent } from './userAccounts/signup/signup.component';
import { UserProfileComponent } from './userAccounts/profile/profile.component';

//Services

//Modules
import { AppRouteModule } from './app-route.module';
import { SharedService } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRouteModule,
    SharedService.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
