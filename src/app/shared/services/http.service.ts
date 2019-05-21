import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';

@Injectable()
export class HttpService {
    constructor(private httpService: HttpClient) {

    }

    private jsonParseResp(resp: HttpResponse<any>) {
        return resp.body && JSON.parse(resp.body);
    }

    private handleError(error) {
        let errorMessage: string;
        if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        };
        return throwError(errorMessage);
    }

    get(url: string): Observable<any> {
        return this.httpService.get(url)
            .pipe(
                map(this.jsonParseResp),
                catchError(this.handleError)
            );
    }

    post(url: string, payload: any): Observable<any> {
        return this.httpService.post(url, payload)
            .pipe(
                map(this.jsonParseResp),
                catchError(this.handleError)
            );
    }
}