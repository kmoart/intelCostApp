import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PixabayService } from '../../services/pixabay.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent {

  imagenes: any[] = [];



  constructor( /*private http: HttpClient*/
                private  pixabay: PixabayService) {

      console.log('Constructor del home o imagenes llamado');

      /*this.http.get('https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25')
              .subscribe( (respuesta : any) => {
                this.imagenes = respuesta.hits;
                console.log( respuesta.hits );
              } );*/
      this.pixabay.getImages()
        .subscribe( (imagenes : any) => {
        this.imagenes = imagenes;
       });

  }
}
