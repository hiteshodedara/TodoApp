import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [];

  constructor() { this.generateRandomUsers() }
  private generateRandomUsers(): void {
    // Manually define 10 static users
    this.users.push({ id: 1, name: 'Hitesh' });
    this.users.push({ id: 2, name: 'Dipen' });
    this.users.push({ id: 3, name: 'Hardik' });
    this.users.push({ id: 4, name: 'Sager' });
    
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUserById(id: number): Observable<User | undefined> {
    const user = this.users.find(u => u.id === id);
    return of(user);

  }
}
