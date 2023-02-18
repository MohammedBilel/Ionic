import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';


export const firebaseConfig = {
  apiKey: "AIzaSyAhYSIvvPquE53mkn6yrcwD60cBgKPt_fU",
  authDomain: "ng-tasks-8cbbe.firebaseapp.com",
  databaseURL: "https://ng-tasks-8cbbe-default-rtdb.firebaseio.com",
  projectId: "ng-tasks-8cbbe",
  storageBucket: "ng-tasks-8cbbe.appspot.com",
  messagingSenderId: "812949007171",
  appId: "1:812949007171:web:219bc22ec0b38d7aae5df6",
  measurementId: "G-K99T897RSX"
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideFirestore(() => getFirestore())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
