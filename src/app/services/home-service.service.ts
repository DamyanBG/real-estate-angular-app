import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Home } from '../interfaces/home';

@Injectable({
  providedIn: 'root',
})
export class HomeServiceService {
  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getAllHomes(): Observable<Home[]> {
    return this.http.get<Home[]>(`${this.baseUrl}/homes`);
  }

  createHome(homeData: Home): Observable<Home> {
    return this.http.post<Home>(`${this.baseUrl}/home`, homeData);
  }

  getHomeDetails(homeId: number): Observable<Home> {
    return this.http.get<Home>(`${this.baseUrl}/home-details/${homeId}`);
  }
}
