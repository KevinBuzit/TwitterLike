import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

import { TabulatedPage } from '../tabulated/tabulated';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public login : string;
  public pwd : string;
  public url : string;

  constructor(public navCtrl: NavController, public http: Http) {
    
  }

  getHeaders() : Headers {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return headers;
  }

  logIn(){
    let body = 'username='+this.login+'&pwd='+this.pwd;

    this.http.post('http://cesi.cleverapps.io/signin',body, {headers: this.getHeaders()})
    .subscribe(res=> {
      console.log('Log OK');
      sessionStorage.setItem('token', res.json().token);
      this.navCtrl.push(TabulatedPage, {
        token: res.json().token 
      });
    }, (err) => {
      console.log(err);
      alert('error authentification ' + err);
    });
  }

  signUp(){
    let body = 'username='+this.login+'&pwd='+this.pwd+'&urlPhoto='+this.url;
    
    this.http.post('http://cesi.cleverapps.io/signup', body, {headers: this.getHeaders()}).subscribe(res => {
      alert('Compte crée avec succès');
    }, (err) => {
      console.log(err);
      alert("Authentication error");
    });
  }
}
