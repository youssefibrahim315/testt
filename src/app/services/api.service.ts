import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateProduct, IProduct } from '../model/IProduct.interface';

const Api = {
  get: 'https://api.restful-api.dev/objects',
  post: 'https://api.restful-api.dev/objects/',
  delete: (data: IProduct) =>
    'https://api.restful-api.dev/objects/' + `${data.id}`,
};
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  get(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(Api.get);
  }

  add(data: ICreateProduct): Observable<any> {
    return this.http.post(Api.post, data);
  }

  delete(data: IProduct): Observable<any> {
    return this.http.delete(Api.delete(data));
  }
}
