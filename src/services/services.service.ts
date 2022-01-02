import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  apiEscritores = 'http://localhost:3000';

  objeto = {
    titulo: '',
    texto: '',
    autor: '',
    tipo: '',
    code: '',
    dataPostado: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

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
    if (id == null) this.router.navigateByUrl('home');
    return this.http.get<any[]>(this.apiEscritores + `/escritores/${id}`);
  }

  updateConteudo(
    id: number,
    titulo: string,
    texto: string,
    autor: string,
    tipo: string,
    dataPostado: any
  ): Observable<any[]> {
    if (id == null) {
      this.router.navigateByUrl('home');
    }
    return this.http.patch<any[]>(this.apiEscritores + `/escritores/${id}`, {
      titulo: titulo,
      texto: texto,
      autor: autor,
      tipo: tipo,
      dataPostado: dataPostado,
    });
  }

  deletarTexto(id: number): Observable<any[]> {
    if (id == null) this.router.navigateByUrl('home');
    return this.http.delete<any[]>(this.apiEscritores + `/escritores/${id}`);
  }
}
