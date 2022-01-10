import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  api = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {}

  postText(
    titulo: string,
    texto: string,
    autor: string,
    tipo: string,
    dataPostado: any
  ): Observable<any> {
    return this.http.post(this.api + '/escritores', {
      titulo: titulo,
      texto: texto,
      autor: autor,
      tipo: tipo,
      dataPostado: dataPostado,
    });
  }

  puxarTexto(): Observable<any[]> {
    return this.http.get<any[]>(this.api + '/escritores');
  }

  puxarTextoId(id: number): Observable<any[]> {
    if (id == null) this.router.navigateByUrl('home');
    return this.http.get<any[]>(this.api + `/escritores/${id}`);
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
    return this.http.patch<any[]>(this.api + `/escritores/${id}`, {
      titulo: titulo,
      texto: texto,
      autor: autor,
      tipo: tipo,
      dataPostado: dataPostado,
    });
  }

  deletarTexto(id: number): Observable<any[]> {
    if (id == null) this.router.navigateByUrl('home');
    return this.http.delete<any[]>(this.api + `/escritores/${id}`);
  }

  puxarUsuario(): Observable<any[]> {
    return this.http.get<any[]>(this.api + `/user`);
  }

  puxarUsuarioId(id: number): Observable<any[]> {
    if (id == null) this.router.navigateByUrl('home');
    return this.http.get<any[]>(this.api + `/user/${id}`);
  }

  verificarLogin(email: any, senha: any): Observable<any[]> {
    return this.http.post<any[]>(this.api + '/user', {
      email: email,
      senha: senha,
    });
  }
}
