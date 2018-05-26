import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/login/home';
import { AngularFireModule } from 'angularfire2';
import { ChatPage } from '../pages/chatRoom/chat';
import { AngularFireDatabaseModule } from 'angularfire2/database';

var config = {
 
    apiKey: "AIzaSyDGJabw3EfIsm9aPEat6UjRL_ViTHEACvI",
    authDomain: "letchat-2f07f.firebaseapp.com",
    databaseURL: "https://letchat-2f07f.firebaseio.com",
    projectId: "letchat-2f07f",
    storageBucket: "letchat-2f07f.appspot.com",
    messagingSenderId: "815265646964"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
