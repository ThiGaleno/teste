
import { Injectable } from '@angular/core';


@Injectable()
export class configProvider {
  config = {
    showSlide: false,
    nome: "",
    usuario: ""

  }
  constructor() {
    
  }
 
   //salva dados no objeto config
  setConfig(showSlide?: boolean, nome?: string, usuario?: string):any{
    let config = {
    showSlide: false,
    nome: "",
    usuario: ""
    };

    if(config.showSlide){
      config.showSlide = showSlide;
    }
    if(config.nome){
      config.nome = nome;
    }
    if(config.usuario){
      config.usuario = usuario;
    }
    localStorage.setItem("config", JSON.stringify(config));
  }
  // grava dados no objeto config
  getConfig(){
    return localStorage.getItem("config");
  }
}
