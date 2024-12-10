import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Ruta al archivo JSON
  private dataUrl: string = '/data.json';

  constructor(private http: HttpClient) { }

  // Método para obtener todos los usuarios
  getData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }

  // Nuevo método para validar usuario y contraseña
  validateUser(username: string, password: string): Observable<boolean> {
    return this.getData().pipe(
      map(users => {
        // Busca un usuario que coincida con el username y password
        const user = users.find((u: any) => u.username === username && u.password === password);
        return !!user; // Devuelve true si el usuario existe, false en caso contrario
      })
    );
}
}
