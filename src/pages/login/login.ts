import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class LoginPage {
  public nomeUsuario:string = "troxa";

  public alertar(nome:string, idade:string){
    alert("Olá " + nome + " Legal saber que vc tem " + idade + " anos. :)");
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //sempre é carregado automaticamente junto com a página
  ionViewDidLoad() {    
    this.alertar("Thiago", "25");
  }

}
