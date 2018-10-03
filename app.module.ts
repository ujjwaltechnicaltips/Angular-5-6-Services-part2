import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import {BiodataService} from './biodata.service';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BiodataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
