import { Component, OnInit } from '@angular/core';
import { PixabayService } from 'src/app/services/pixabay.service';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent {

  imagenes: any[] = [];

  public actions = ['science', 'education', 'people', 'feelings', 'computer', 'buildings']
  public dropdownItem: string;

  constructor( private pixabay: PixabayService) {
    this.dropdownItem = this.actions[0];
  }

  changeValue(item:string) {
    this.dropdownItem = item;
    console.log(item);
    this.pixabay.searchImagesbyCategory( item )
    .subscribe( (imagenes:any) =>{
        this.imagenes = imagenes.hits;
        console.log(imagenes);
    });
  }

}
