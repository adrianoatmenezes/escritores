import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  apiEscritores = 'http://localhost:3000/escritores';

  constructor(private http: HttpClient) {}

  postText(
    titulo: string,
    texto: string,
    autor: string,
    tipo: string,
    dataPostado: any
  ): Observable<any> {
    return this.http.post(this.apiEscritores, {
      titulo: titulo,
      texto: texto,
      autor: autor,
      tipo: tipo,
      dataPostado: dataPostado,
    });
  }

  puxarTexto(): Observable<any[]> {
    return this.http.get<any[]>(this.apiEscritores);
  }
}
