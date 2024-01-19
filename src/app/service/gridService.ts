import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GridService {
  private endpoint = `${environment.apiUrl}`;

  constructor(private _httpClient: HttpClient) {
  }

  getList(): Observable<any> {
    return this._httpClient.get<any>(`${this.endpoint}holiday/GetHoliday`);
  }

  getListId(id: string): Observable<any> {
    return this._httpClient.get<any>(`${this.endpoint}/${id}`);
  }

  deleteId(id: string): Observable<any> {
    return this._httpClient.get<any>(`${this.endpoint}holiday/DelHoliday/${id}`);
  }

//   setMessage(ip: string, mensagem: string, porta: string, painelId:string): Observable<any> {
//     var model = {
//       "painel_id":painelId,
//       "mensagem":mensagem
//       }
//     return this.httpPost(`${this.endpoint}/enviar-mensagem`, model);
//   }

//   updateListId(payload: Dashboard): Observable<any> {
//     return this.httpPut(`${this.endpoint}/${payload._id}`, payload);
//   }



//   create(payload: Dashboard): Observable<any> {
//     return this.httpPost(`${this.endpoint}`, payload);
//   }
}
