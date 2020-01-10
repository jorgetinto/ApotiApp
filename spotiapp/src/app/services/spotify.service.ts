import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('spotify service listo');
  }

   getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAZ4eRnB26it9wb_uvvdS9gbJjZykMxP3OoSyUT5wKtU9jh-nZmL2ykuhoFu_qeikovfY2oeIekjtMkQ0k'
    });

    return this.http.get(url, {headers});
   }

   getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
            .pipe(map(data => data[`albums`].items ));
   }

   getArtista(termino: string) {
     return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
             .pipe(map(data => data[`artists`].items ));
    }
}
