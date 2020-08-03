import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appartements } from './appartements';

@Injectable({
  providedIn: 'root'
})
export class AppartementsService {

  private BASE_URL = 'https://5d60ae24c2ca490014b27087.mockapi.io/api/v1';

  constructor(
    private http: HttpClient) { }

    getAppartements (){
        // return this.http.get(`${this.BASE_URL}/apartement`).pipe(
        //   map((res) => res.json())).subscribe((apartement) => this.apartement = apartement)
    

          return this.http.get<Appartements[]>(`${this.BASE_URL}/apartement`);
    
    }

}
