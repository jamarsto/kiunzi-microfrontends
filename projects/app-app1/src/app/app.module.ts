import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthConfigModule } from 'lib-micro-front-end';

import { AppComponent } from './app.component';
import { RemoteAppRoutingModule } from './remote-app/remote-app-routing.module';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [],
  imports: [
    AuthConfigModule,
    BrowserModule,
    RemoteAppRoutingModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
