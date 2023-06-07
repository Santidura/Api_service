import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeAppComponent } from './components/home-app/home-app.component';
import { AboutAppComponent } from './components/about-app/about-app.component';
import { ContactAppComponent } from './components/contact-app/contact-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeAppComponent,
    AboutAppComponent,
    ContactAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
