import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpService } from './http.service';
import { UrlDetails } from '../urldetails.model';

@Injectable()
export class ResolveSignupService implements Resolve<any> {
    constructor(private httpService: HttpService) {}

    resolve(): any {
        return this.httpService.get(UrlDetails.PwdHintUrl);
    }
}