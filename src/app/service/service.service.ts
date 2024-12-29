import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiUrl = 'http://localhost:3000/';
  constructor
  (
    private http: HttpClient
  )
  {
  }

  getAll(url:any){
    this.http.get(url);
  }

  getGeneral( url: any ): Observable<any> {
    return this.http.get<any>(
     this.apiUrl+url
    )
  }

  getNewsById(id: string): Observable<any> {
    // No codificamos el id para permitir la inyección SQL
    const encodedId = encodeURIComponent(id);

    return this.http.get(`${this.apiUrl}news?id=${encodedId}`);
}
  
}
