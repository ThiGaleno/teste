
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//https://api.themoviedb.org/3/movie/550?api_key=89ee8315e701e2c3baf0dfce8a227b99


@Injectable()
export class MoviesProvider {

  private link = "https://api.themoviedb.org/3/movie/latest?";
  private key = "api_key=89ee8315e701e2c3baf0dfce8a227b99";
  private tudo = "https://api.themoviedb.org/3/movie/popular?api_key=89ee8315e701e2c3baf0dfce8a227b99";
  

  constructor(public http: Http) {
    console.log('Hello MoviesProvider Provider');
  }
  getLatesMovies(){
    return this.http.get(this.tudo);
  }

}
