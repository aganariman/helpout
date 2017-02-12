import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing, appRoutingProviders} from './app.routing';
import {Configuration} from './app.constants'

import {AuthGuard} from './guards/index';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {ThingsComponent} from './components/things/things.component';
import {SendtimeComponent} from './components/sendtime/sendtime.component';

import {ThingService} from './services/thing.service'
import {SendtimeService} from './services/sendtime.service'
import {AuthenticationService} from './services/authentication.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ThingsComponent,
    SendtimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    Configuration,
    AuthenticationService,
    AuthGuard,
    ThingService,
    SendtimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
