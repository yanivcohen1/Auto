import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { Tests } from './tests.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class TestsService {

    private resourceUrl = SERVER_API_URL + 'api/tests';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/tests';

    constructor(private http: Http) { }

    create(tests: Tests): Observable<Tests> {
        const copy = this.convert(tests);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(tests: Tests): Observable<Tests> {
        const copy = this.convert(tests);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<Tests> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            return res.json();
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    search(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceSearchUrl, options)
            .map((res: any) => this.convertResponse(res));
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    private convert(tests: Tests): Tests {
        const copy: Tests = Object.assign({}, tests);
        return copy;
    }
}
