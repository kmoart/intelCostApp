import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from "rxjs/operators";//reactive extensions

@Injectable({
  providedIn: 'root' // forma automática para importar servicios
})
export class PixabayService {

  url = 'https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb2';

  constructor( private http: HttpClient ) {
    console.log('Pixabay service listo');
   }

   getImages(){

     return this.http.get(this.url)
     .pipe( map( data => {
          return data['hits'];
     })); //Transformación de datos con un pipe, para especificar que se necesita solo el arreglo de hits.

   }

   searchImagesbyWord(termino : string){

    return this.http.get(this.url + `&lang=es&q=${ termino }`)
    .pipe( map( data => {
          return data['hits'];
     })); //Transformación de datos con un pipe, para especificar que se necesita solo el arreglo de hits.
   }

   searchImagesbyCategory( categoria: string){
   /* return this.http.get(this.url + `&category=${ categoria }`)
    .pipe( map( data => {
          return data['hits'];
     })); */
    return this.http.get(`https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25&category=${ categoria }`);
   }

}
