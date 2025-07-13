import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Test_mon } from './test-mon.model';
import { DateUtils } from 'ng-jhipster';
@Injectable()
export class Test_monService {

    private resourceUrl = 'microservicemongo/api/test-mons';
    private resourceSearchUrl = 'microservicemongo/api/_search/test-mons';

    constructor(private http: Http, private dateUtils: DateUtils) { }

    create(test_mon: Test_mon): Observable<Test_mon> {
        let copy: Test_mon = Object.assign({}, test_mon);
        copy.date = this.dateUtils
            .convertLocalDateToServer(test_mon.date);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(test_mon: Test_mon): Observable<Test_mon> {
        let copy: Test_mon = Object.assign({}, test_mon);
        copy.date = this.dateUtils
            .convertLocalDateToServer(test_mon.date);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<Test_mon> {
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
