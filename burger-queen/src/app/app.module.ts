import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel está aquí

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeseroComponent } from './mesero/mesero.component';
import { CocinaComponent } from './cocina/cocina.component';

@NgModule({
  declarations: [
    AppComponent,
    MeseroComponent,
    CocinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
