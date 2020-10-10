import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { SearchComponent } from './pages/search/search.component';
import { DropDownComponent } from './pages/drop-down/drop-down.component';

const routes: Routes = [
    { path: 'imagenes', component: ImagenesComponent},
    { path: 'category', component: DropDownComponent},
    { path: 'search', component: SearchComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'imagenes' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes, { useHash: true} ) // archivo de rutas principal  enviando los routes o rutas especificadas.
  ],
  exports: [
    RouterModule // para usar las rutas de forma global en otras partes del proyecto
  ]
})
export class AppRoutingModule { }
