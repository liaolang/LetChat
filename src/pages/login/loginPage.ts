import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ChatPage } from '../chatRoom/chatRoom';
 
@Component({
  selector: 'page-home',
  templateUrl: 'loginPage.html'
})
export class LoginPage {
    username: string = '';
  constructor(public navCtrl: NavController,
      private alertCtrl: AlertController) {
  }

    showAlert(title: string, message: string) {
      let alertBox = this.alertCtrl.create({
        title: title,
        subTitle: message,
        buttons: ['Alright']
      });
      alertBox.present();
    }

    loginUser() {
        if(/^[a-zA-Z0-9]+$/.test(this.username)) {
            this.navCtrl.push(ChatPage, {
                username: this.username
            });
        } else {
            this.showAlert('😎', 'Please enter your name!'); // Error
        }
    }

}
 