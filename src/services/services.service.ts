import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  apiEscritores = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  postText(
    titulo: string,
    texto: string,
    autor: string,
    tipo: string,
    code: string,
    dataPostado: any
  ): Observable<any> {
    return this.http.post(this.apiEscritores + '/escritores', {
      titulo: titulo,
      texto: texto,
      autor: autor,
      tipo: tipo,
      code: code,
      dataPostado: dataPostado,
    });
  }

  puxarTexto(): Observable<any[]> {
    return this.http.get<any[]>(this.apiEscritores + '/escritores');
  }

  puxarTextoId(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.apiEscritores + `/escritores/${id}`);
  }
}
