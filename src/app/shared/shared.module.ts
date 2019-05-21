import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { ResolveSignupService } from './services/signup-resolve.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        ResolveSignupService
    ]
})
export class SharedService {
    constructor() {}

    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedService,
            providers: [HttpService]
        }
    }
}