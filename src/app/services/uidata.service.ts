import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIdataService {

  private configUrl = 'assets/config.json'; 

  constructor(private http:HttpClient) { }

  TodoListUI():Observable<any[]> {
    return this.http.get<any[]>(this.configUrl);
  }
}
