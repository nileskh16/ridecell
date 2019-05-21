import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-user-signup',
    templateUrl: './signup.template.html',
    styleUrls: ['./signup.style.scss']
})
export class SignupComponent implements OnInit, OnDestroy{

    userRegForm: FormGroup;

    constructor() {
        this.userRegForm = this.createSignUpForm();
    }

    createSignUpForm():FormGroup {
        return new FormGroup({
            emailId: new FormControl('', [Validators.required]),
            displayName: new FormControl('', [Validators.required]),
            userPwd: new FormControl('', [Validators.required]),
            confirmPwd: new FormControl('', [Validators.required])
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