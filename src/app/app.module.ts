import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import {AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { environment } from '@src/environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { DemoComponent } from './pages/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase.config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
