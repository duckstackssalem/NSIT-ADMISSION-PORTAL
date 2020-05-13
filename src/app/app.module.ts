import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

//toaster
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDXu7kMrlXkMaMC0MPopCZqXz_rGNMvQkM",
  authDomain: "nsit-admission-page.firebaseapp.com",
  databaseURL: "https://nsit-admission-page.firebaseio.com",
  projectId: "nsit-admission-page",
  storageBucket: "nsit-admission-page.appspot.com",
  messagingSenderId: "426828884430",
  appId: "1:426828884430:web:913a4f670a0017a042639f",
  measurementId: "G-2J936EKWHD"
}

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-top-right',
      preventDuplicates: false
    }),
    ToastrModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  