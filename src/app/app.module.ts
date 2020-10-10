import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Importar rutas
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ImagenComponent } from './pages/imagen/imagen.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { SearchComponent } from './pages/search/search.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DropDownComponent } from './pages/drop-down/drop-down.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagenComponent,
    ImagenesComponent,
    SearchComponent,
    NavbarComponent,
    DropDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Se importa el app-routing.module
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
