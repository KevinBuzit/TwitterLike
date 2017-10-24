import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {

  public message : string;
  public messages : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,  public http: Http) {
    this.load(null);
  }

  getHeaders() : Headers {
    var headers = new Headers();
    headers.append('token', sessionStorage.getItem('token'));
    return headers;
  }

  load(refresher) {
    this.http.get('http://cesi.cleverapps.io/messages', 
        {headers:this.getHeaders()}).subscribe(res => {
          this.messages = res.json(); 
          if(refresher){
            refresher.complete();
          }
        }, (err) => {
          console.log(err);
          alert("error calling http " + err);
          if(refresher){
            refresher.complete();
          }
        });
  }

  doRefresh(refresher) {
    this.load(refresher);
  }

  posterMessage() {
    let header : Headers = this.getHeaders();
    let param :string = 'message='+this.message; 

    header.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://cesi.cleverapps.io/messages', param, 
      {headers : header}).subscribe(res => {
        this.load(null);
      }, (err) => {
        console.log(err);
        alert("error calling http " + err);
      });

    this.message = null;
  }

}
