import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    MoviesProvider
  ]
})
export class LoginPage {
  public nomeUsuario:string = "troxa";
  public img = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
  public lista_filmes = new Array<any>();

  public alertar(nome:string, idade:string){
    alert("Olá " + nome + " Legal saber que vc tem " + idade + " anos. :)");
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,    
    private moviesProvider: MoviesProvider
  
  ) {
  }

  //sempre é carregado automaticamente junto com a página
  ionViewDidLoad() {    
    
    this.moviesProvider.getLatesMovies().subscribe(
      data=>
      {
        const response = (data as any);
        const filme = JSON.parse(response._body);
        this.lista_filmes = filme.results;
        console.log(filme);
      },error=>
      {
        console.log(error);
      }

    )//fecha subscrible
   
  }//fecha ionViewDidLoad

}//Fecha classe
