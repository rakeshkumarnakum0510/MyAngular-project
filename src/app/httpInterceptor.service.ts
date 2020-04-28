import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CaseService } from './case.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    constructor(private caseService: CaseService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.caseService.isUserLoggedIn() && req.url.indexOf('basicauth') === -1) {
            const authReq = req.clone({
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${window.btoa(this.caseService.username + ":" + this.caseService.password)}`
                })
            });
            return next.handle(authReq);
        } else {
            return next.handle(req);
        }
    }
}