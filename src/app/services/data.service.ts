import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Enfermero } from '../models/enfermeros.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataUrl: string = 'http://localhost:8000/nurse'; 
  private loggedInUser: any = null; 
  private users: any[] = []; 

  constructor(private http: HttpClient) {
   
  }

 getData(filters: { name?: string; surname?: string } = {}): Observable<Enfermero[]> {
  const params: any = {};
  if (filters.name) params.name = filters.name;
  if (filters.surname) params.surname = filters.surname;

  return this.http.get<{ status: string; nurses: Enfermero[] }>(`${this.dataUrl}/index`, { params }).pipe(
    map((response) => {
      if (response.status === 'success') {
        return response.nurses; 
      } else {
        console.error('Error en la respuesta del servidor:', response);
        return []; 
      }
    }),
    catchError((error) => {
      console.error('Error al obtener los datos:', error);
      return of([]); 
    })
  );
}


addUser(user: Partial<Enfermero>): Observable<{ status: string; message?: string; nurse?: Enfermero }> {
  return this.http.post<{ status: string; message?: string; nurse?: Enfermero }>(`${this.dataUrl}/new`, user).pipe(
    map((response) => {
      if (response.status === 'success') {
        console.log('Usuario registrado con éxito:', response.nurse);
        return response; // Devuelve el objeto completo con status, message y nurse
      } else {
        console.error('Error en la respuesta del servidor:', response);
        throw new Error(response.message || 'Registro fallido');
      }
    }),
    catchError((error) => {
      console.error('Error al registrar el usuario:', error);
      return throwError(() => new Error('Error al registrar el usuario.'));
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

  validatePhone(phone: string): boolean {
    const phoneRegex = /^\d{3}-\d{3}-\d{3}$/; // Regla para XXX-XXX-XXX
    return phoneRegex.test(phone);
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

