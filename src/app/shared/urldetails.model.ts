export class UrlDetails {
    constructor() {}

    private static baseUrl: string = 'https://evening-plateau-93775.herokuapp.com';
    private static pwdHintUrl: string = '/api/v2/people/password_requirements'

    public static get BaseUrl(): string {
        return this.baseUrl;
    }
    
    public static get PwdHintUrl(): string {
        return this.BaseUrl + this.pwdHintUrl;
    }
}