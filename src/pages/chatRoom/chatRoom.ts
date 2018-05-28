import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

 
@Component({
  selector: 'page-chat',
  templateUrl: 'chatRoom.html',
})
export class ChatPage {

  username: string = '';
  message: string = '';
  _chatSubscription;
  messages: object[] = [];

  constructor(public db: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
      this.username = this.navParams.get('username');
      this._chatSubscription = this.db.list('/records').subscribe( data => {
        this.messages = data;
      });
    }

    sendMessage() {
      this.db.list('/records').push({
        username: this.username,
        message: this.message
      }).then( () => {   // sent message 
     
      }).catch( () => { // maybe firebase error is unreachable
        
      });
      this.message = '';
    }

    ionViewDidLoad() {
      this.db.list('/records').push({
        specialMessage: true,
        message: `${this.username} says "Hello"`
      });
    }

    ionViewWillLeave(){
      this._chatSubscription.unsubscribe();
      this.db.list('/records').push({
        specialMessage: true,
        message: `${this.username} says "See you all"`
      });
    }
  }
