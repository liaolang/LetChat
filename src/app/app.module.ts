import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { LetChat} from './app.component';
import { LoginPage } from '../pages/login/loginPage';
import { AngularFireModule } from 'angularfire2';
import { ChatPage } from '../pages/chatRoom/chatRoom';
import { AngularFireDatabaseModule } from 'angularfire2/database';

var config = {//contect to firebase
 
    apiKey: "AIzaSyDGJabw3EfIsm9aPEat6UjRL_ViTHEACvI",
    authDomain: "letchat-2f07f.firebaseapp.com",
    databaseURL: "https://letchat-2f07f.firebaseio.com",
    projectId: "letchat-2f07f",
    storageBucket: "letchat-2f07f.appspot.com",
    messagingSenderId: "815265646964"
};

@NgModule({
  declarations: [
    LetChat,
    LoginPage,
    ChatPage,
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(LetChat),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    LetChat,
    LoginPage,
    ChatPage
  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
