import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbcComponent } from './abc/abc.component';
import { HarshitComponent } from './harshit/harshit.component';
import { AnkitComponent } from './ankit/ankit.component';

@NgModule({
  declarations: [
    AppComponent,
    AbcComponent,
    HarshitComponent,
    AnkitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
