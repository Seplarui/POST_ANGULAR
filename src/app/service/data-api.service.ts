import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

import { EmpresaInterface } from '../../models/empresa-interface';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }

  empresas: Observable<any>;
  empresa: Observable<any>;
  headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');


  saveEmpresa(empresa: EmpresaInterface) {
    const urlApi = 'http://localhost:3000/api/empresa';
    return this.http
      .post<EmpresaInterface>(urlApi, empresa, { headers: this.headers })
      .pipe(map(data => data));
  }
}
