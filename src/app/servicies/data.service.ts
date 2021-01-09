import { Injectable } from '@angular/core';
import {marcaI, submarca,estadoI,municipioI} from '../models/model.interface'
@Injectable()
export class DataService {
  private marcas: marcaI[] =[
    {
      id: 0,
      name: 'Selecciona Marca de Auto'
    },
    {
      id: 1,
      name: 'Toyota'
    },
    {
      id: 2,
      name: 'Chevrolet'
    },
    {
      id: 3,
      name: 'Nissan'
    }
  ];
  private submarcas: submarca[]= [
    {
      id:1,
      marcaId: 1,
      name: 'Avanza'
    },
    {
      id:2,
      marcaId: 1,
      name: 'Corolla'
    },
    {
      id:3,
      marcaId: 2,
      name: 'Aveo'
    },
    {
      id:4,
      marcaId: 2,
      name: 'Cruze'
    },

    {
      id:5,
      marcaId: 3,
      name: 'Versa'
    },
    {
      id:6,
      marcaId: 3,
      name: 'X-Trail'
    }
  ];
  private estados: estadoI[] =[
    {
      id:0,
      name: 'Selecciona Estado'
    },
    {
      id:1,
      name: 'Aguascalientes'
    },
    {
      id:2,
      name: 'Baja California'
    },
    {
      id:3,
      name: 'Baja California Sur'
    },
    {
      id:4,
      name: 'Campeche'
    },
    {
      id:5,
      name: 'Ciudad de México'
    },
  ];
  private municipios: municipioI[] =[
    {
      id:1,
      municipioId: 1,
      name: 'Aguascalientes'
    },
    {
      id:1,
      municipioId: 1,
      name: 'Asientos'
    },
    {
      id:1,
      municipioId: 1,
      name: 'Calvillo'
    },
    {
      id:2,
      municipioId: 2,
      name: 'Ensenada'
    },
    {
      id:2,
      municipioId: 2,
      name: 'Mexicali'
    },
    {
      id:2,
      municipioId: 2,
      name: 'Playas de Rosarito'
    },
    {
      id:2,
      municipioId: 2,
      name: 'Tecate'
    },
  ];
  
  getmarcas(): marcaI[]{
    return this.marcas;
  } 
  getsubmarcas(): submarca[]{
    return this.submarcas;
  }
  getestados(): estadoI[]{
    return this.estados;
  } 
  getmunicipios(): municipioI[]{
    return this.municipios;
  } 
}
