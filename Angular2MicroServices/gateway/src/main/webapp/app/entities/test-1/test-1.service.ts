import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Test1 } from './test-1.model';
import { DateUtils } from 'ng-jhipster';
@Injectable()
export class Test1Service {

    private resourceUrl = 'api/test-1-s';
    private resourceSearchUrl = 'api/_search/test-1-s';

    constructor(private http: Http, private dateUtils: DateUtils) { }

    create(test1: Test1): Observable<Test1> {
        let copy: Test1 = Object.assign({}, test1);
        copy.date = this.dateUtils
            .convertLocalDateToServer(test1.date);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(test1: Test1): Observable<Test1> {
        let copy: Test1 = Object.assign({}, test1);
        copy.date = this.dateUtils
            .convertLocalDateToServer(test1.date);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<Test1> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            let jsonResponse = res.json();
            jsonResponse.date = this.dateUtils
                .convertLocalDateFromServer(jsonResponse.date);
            return jsonResponse;
        });
    }

    query(req?: any): Observable<Response> {
        let options = this.createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: any) => this.convertResponse(res))
        ;
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    search(req?: any): Observable<Response> {
        let options = this.createRequestOption(req);
        return this.http.get(this.resourceSearchUrl, options)
            .map((res: any) => this.convertResponse(res))
        ;
    }

    private convertResponse(res: any): any {
        let jsonResponse = res.json();
        for (let i = 0; i < jsonResponse.length; i++) {
            jsonResponse[i].date = this.dateUtils
                .convertLocalDateFromServer(jsonResponse[i].date);
        }
        res._body = jsonResponse;
        return res;
    }

    private createRequestOption(req?: any): BaseRequestOptions {
        let options: BaseRequestOptions = new BaseRequestOptions();
        if (req) {
            let params: URLSearchParams = new URLSearchParams();
            params.set('page', req.page);
            params.set('size', req.size);
            if (req.sort) {
                params.paramsMap.set('sort', req.sort);
            }
            params.set('query', req.query);

            options.search = params;
        }
        return options;
    }
}
