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
    this.users.push({ id: 1, name: 'Odedara Hitesh' });
    this.users.push({ id: 2, name: 'Kukadiya Dipen' });
    this.users.push({ id: 3, name: 'Bhardva Hardik' });
    this.users.push({ id: 4, name: 'Timba Sager' });

  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUserById(id: number): Observable<User | undefined> {
    const user = this.users.find(u => u.id === id);
    return of(user);

  }
}
