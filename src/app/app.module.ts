import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { A0011Component } from './a001-1/a001-1.component';
import { A0012Component } from './a001-2/a001-2.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent, FooterComponent, A0011Component, A0012Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
