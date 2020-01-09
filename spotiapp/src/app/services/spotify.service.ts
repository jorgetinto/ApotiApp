import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('spotify service listo');
   }

   getNewReleases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAJ81kcTPe3_A7AQaAuLjRV0qOBNygVpmQqHter8bxbMIK3qV1zpCEs6ZG8OkpaMEiOjBqXV_fXu088pSw'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe( data => {
        console.log(data);
      });
   }
}
