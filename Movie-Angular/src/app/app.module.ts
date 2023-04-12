import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    SubscribeComponent,
    IndexComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
