
import {Http, Headers, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface login{
    id: any;
    username: string;
    password: string;
    
}

@Injectable()
export class LoginService{
    constructor(private http: HttpClient) {}

    getLogin(user: string): Promise<login> {
        return this.http.get<login>('http://localhost:3000/login/' + user).toPromise()
    }
}