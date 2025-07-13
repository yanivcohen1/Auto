import { Injectable } from '@angular/core';
import { Message, MenuItem, TreeNode } from 'primeng/components/common/api';
import { Tree } from 'primeng/components/tree/tree';
import { SharedModule } from 'primeng/components/common/shared';
import { PrimeTemplate } from 'primeng/components/common/shared';
import { CsvService, MessageSevirtyEnum, ModalService } from '../shared';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PrimeService {

  constructor(private http: HttpClient) { }

  run_tests(tree: TreeNode[], envirment, email): Observable<string> {
    const copy = this.convert(tree);
    return this.http
    .post('/api/run_tests', tree, {
      params: new HttpParams().set('envirment', envirment.name).set('email', email),
      // headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
    })
  }

  get_tests(): Observable<TreeNode[]> {
    return this.http // .get('api/run_tests')
      .get<TreeNode[]>('/api/run_tests')
  }

  private convert(tree: TreeNode[]): TreeNode[] {
      const copy: TreeNode[] = Object.assign({}, tree);
      return copy;
  }

}
