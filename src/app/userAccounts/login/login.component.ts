import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login-component',
    templateUrl: './login.template.html',
    styleUrls: ['./login.style.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    loginUserForm: FormGroup;

    constructor() {
        this.loginUserForm = this.constructLoginForm();
    }

    constructLoginForm(): FormGroup {
        return new FormGroup({
            userName: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });
    }

    changeType(controlName: any) {
        if (controlName) {
            controlName.type = controlName.type === 'password' ? 'text' : 'password';
        }
    }

    ngOnInit() {

    }

    ngOnDestroy() {
        
    }
}