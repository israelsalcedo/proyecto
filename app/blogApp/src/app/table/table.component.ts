import { Component, OnInit } from '@angular/core';
import {ICat} from './cat';
import {ProductService} from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {
  errorMessage: any;
  photos: any;
  newCat: ICat[] = [{name:'', race: '', description: '', img:'' }];
  currentCat:any;
  cats: ICat[]= [
    {name: 'Mia', race: 'siames', description: '', img:"http://www.mundogatos.com/Uploads/mundogatos.com/ImagenesGrandes/raza-gatos-sagrado-de-birmania.jpg "},
    {name: 'Chiquis', race: 'siames', description: '', img:"https://t1.ea.ltmcdn.com/es/images/5/5/8/img_las_razas_de_gatos_mas_carinosos_20855_paso_0_600.jpg"},
    {name: 'Gordo', race: 'siames', description: '', img:"http://www.mundogatos.com/Uploads/mundogatos.com/ImagenesGrandes/raza-gatos-skogkatt.jpg "}
  ]

  constructor(private _productService: ProductService){
  }

  ngOnInit():void{
    this._productService.getProducts().subscribe(
      photos => this.photos = photos,
      error => this.errorMessage = <any>error);
    
  
  }


  removeCat(cat):void{
    this.cats = this.cats.filter((x) =>{
      return x.name != cat.name
    });
  }
    addCat(): void{
      this.cats.push(this.newCat[0]);
      this.newCat = [{name:'', race:'',description: '',img:''}]
    }
    setCurrentCat(cat):void{
      this.currentCat=cat; 
    }
    

  }

