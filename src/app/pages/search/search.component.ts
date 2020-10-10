import { Component } from '@angular/core';
import { PixabayService } from '../../services/pixabay.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  imagenes: any[] = [];

  constructor( private pixabay: PixabayService) { }


  buscar(termino: string ){
    console.log(termino);
    this.pixabay.searchImagesbyWord( termino )
    .subscribe( (imagenes:any) =>{
        this.imagenes = imagenes;
        console.log(imagenes);
    });
  }



}
