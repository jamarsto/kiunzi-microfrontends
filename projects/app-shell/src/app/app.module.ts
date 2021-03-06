import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MicroFrontEndModule } from '@jamarsto/kiunzi-micro-frontend-tools';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AuthConfigModule } from 'lib-micro-front-end';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    AppRoutingModule,
    AuthConfigModule,
    BrowserModule,
    MicroFrontEndModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
