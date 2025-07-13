import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Injectable()
export class MyHttpLogInterceptor implements HttpInterceptor {

  constructor(private slimLoadingBarService: SlimLoadingBarService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.slimLoadingBarService.start();
    console.log('processing request', request);

    const customReq = request.clone({
      headers: request.headers.set('app-language', 'it')
    });

    return next
      .handle(customReq)
      .do((ev: HttpEvent<any>) => {
        if (ev instanceof HttpResponse) {
          this.slimLoadingBarService.complete();
          console.log('processing response', ev);
        }
      })
      .catch((response) => {
        if (response instanceof HttpErrorResponse) {
          this.slimLoadingBarService.complete();
          console.log('Processing http error', response);
        }

        return Observable.throw(response);
      });
  }
}
