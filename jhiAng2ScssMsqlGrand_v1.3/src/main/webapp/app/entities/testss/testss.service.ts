import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { Testss } from './testss.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class TestssService {

    private resourceUrl = SERVER_API_URL + 'api/testsses';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/testsses';

    constructor(private http: Http, private dateUtils: JhiDateUtils) { }

    create(testss: Testss): Observable<Testss> {
        const copy = this.convert(testss);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(testss: Testss): Observable<Testss> {
        const copy = this.convert(testss);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: string): Observable<Testss> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: string): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    search(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceSearchUrl, options)
            .map((res: any) => this.convertResponse(res));
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        const result = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new ResponseWrapper(res.headers, result, res.status);
    }

    /**
     * Convert a returned JSON object to Testss.
     */
    private convertItemFromServer(json: any): Testss {
        const entity: Testss = Object.assign(new Testss(), json);
        entity.dates = this.dateUtils
            .convertLocalDateFromServer(json.dates);
        return entity;
    }

    /**
     * Convert a Testss to a JSON which can be sent to the server.
     */
    private convert(testss: Testss): Testss {
        const copy: Testss = Object.assign({}, testss);
        copy.dates = this.dateUtils
            .convertLocalDateToServer(testss.dates);
        return copy;
    }
}
