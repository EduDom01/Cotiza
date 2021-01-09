import { ProviderAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import {marcaI, submarca, estadoI, municipioI} from 'src/app/models/model.interface';
import{DataService} from 'src/app/servicies/data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]

})
export class AppComponent implements OnInit{
  public selectedmarca: marcaI ={id: 0, name: '' };
  public selectedestado: estadoI ={id: 0, name: '' };
  public marcas: marcaI[];
  public submarcas: submarca[];
  public estados: estadoI[];
  public municipios: municipioI[]
  constructor(private dataSvc: DataService){ }
  ngOnInit(): void{
    this.marcas= this.dataSvc.getmarcas();
    this.estados=this.dataSvc.getestados();
  }
  onSelect(id:number):void{
    this.submarcas =this.dataSvc.getsubmarcas().filter(item => item.marcaId == id);
    this.municipios =this.dataSvc.getmunicipios().filter(item => item.municipioId == id);
  }
 
  
  title = 'Cotiza';
}
