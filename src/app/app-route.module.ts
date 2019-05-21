import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './userAccounts/login/login.component'
import { SignupComponent } from './userAccounts/signup/signup.component';
import { UserProfileComponent } from './userAccounts/profile/profile.component';
import { ResolveSignupService } from './shared/services/signup-resolve.service';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'profile',
        component: UserProfileComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            useHash: false
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouteModule {
    constructor() {}
}