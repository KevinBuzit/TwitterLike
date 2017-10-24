import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MessagesPage } from '../messages/messages';
import { ContactsPage } from '../contacts/contacts';

/**
 * Generated class for the TabulatedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabulated',
  templateUrl: 'tabulated.html',
})
export class TabulatedPage {

  MessageTab = MessagesPage;
  ContactTab = ContactsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
