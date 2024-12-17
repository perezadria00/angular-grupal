import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataUrl: string = 'assets/data.json'; // Ruta al archivo JSON
  private loggedInUser: any = null; // Almacena el usuario logueado
  private users: any[] = []; // Simulación de datos cargados

  constructor(private http: HttpClient) {
    this.getData().subscribe((data) => {
      this.users = data;
    });
  }

  // Método para obtener todos los usuarios
  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl).pipe(
      catchError((error) => {
        console.error('Error al obtener los datos:', error);
        return of([]); // Devuelve un array vacío en caso de error
      })
    );
  }

  // Método para agregar un nuevo usuario
  addUser(user: any): Observable<any> {
    return this.http.post(this.dataUrl, user).pipe(
      catchError((error) => {
        console.error('Error al agregar usuario:', error);
        return throwError(error);
      })
    );
  }

  // Método para validar usuario y contraseña
  validateUser(username: string, password: string): Observable<boolean> {
    return this.getData().pipe(
      map((users) => {
        const user = users.find(
          (u: any) => u.username === username && u.password === password
        );
        if (user) {
          this.loggedInUser = user; // Almacena el usuario validado
          return true;
        }
        return false;
      }),
      catchError((error) => {
        console.error('Error al validar el usuario:', error);
        return of(false); // Devuelve `false` en caso de error
      })
    );
  }

  // Método para obtener el perfil del usuario autenticado
  getProfile(): Observable<any> {
    if (this.loggedInUser) {
      return of(this.loggedInUser); // Devuelve el usuario almacenado
    } else {
      console.warn('No hay un usuario autenticado');
      return of(null); // Devuelve null si no hay usuario logueado
    }
  }
}

