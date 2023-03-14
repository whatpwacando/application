import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getCnpcItemsByPageNo(pageNo: number) {
    return this.http.post(
      'https://www.cnpcbidding.com/cms/pmsbidInfo/listPageOut',
      {
        url: './list.html',
        pid: '180',
        pageSize: 15,
        categoryId: '183',
        title: '',
        projectType: '',
        pageNo: pageNo,
        shiXinName: '',
      }
    );
  }

  getCnpcItemById(id: string) {
    return this.http.post(
      'https://www.cnpcbidding.com/cms/pmsbidInfo/detailsOut',
      {
        url: './page.html',
        pid: '180',
        pageSize: 15,
        categoryId: '183',
        title: '',
        projectType: '',
        pageNo: 1,
        shiXinName: '',
        dataId: id,
      }
    );
  }
}
