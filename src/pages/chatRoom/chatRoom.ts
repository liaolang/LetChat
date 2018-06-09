import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

 
@Component({
  selector: 'chatRoomPage',
  templateUrl: 'chatRoom.html',
})
export class ChatPage {

  username: string = '';
  message: string = '';
  Subscription;
  messages: object[] = [];

  constructor(public db: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
      this.username = this.navParams.get('username');
      this.Subscription = this.db.list('/records').subscribe( data => {
        this.messages = data;
      });
    }
    
    ionViewDidLoad() {
      this.db.list('/records').push({
        specialMessage: true,
        message: `${this.username} says "Hello"`
      });
    }

    ionViewWillLeave(){
      this.Subscription.unsubscribe();
      this.db.list('/records').push({
        specialMessage: true,
        message: `${this.username} says "See you all"`
      });
    }

    sendMessage() {
      this.db.list('/records').push({
        username: this.username,
        message: this.message
      }).then( () => { // Senting message 
     
      }).catch( () => {  // form firebase 
        
      });
      this.message = '';
    }

    
  }