import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class dataService {
    menu:any[]=[
    {
      nombre :'Producto 1',
      imagen:'https://portal.andina.pe/EDPfotografia3/Thumbnail/2021/01/01/000737963W.jpg',
      precio:'20.00'
    },
    {
        nombre :'Producto 2',
        imagen:'https://img.freepik.com/vector-gratis/conjunto-productos-aislados-alimentos-supermercado_1284-39967.jpg?w=2000',
        precio:'40.00'
    },
    {
        nombre :'Producto 3',
        imagen:'https://img.lalr.co/cms/2017/04/12033800/Productos_Vendidos_CocaCola1204.jpg?size=sm&ratio=sq&f=jpg',
        precio:'60.00'
    },
    {
        nombre :'Producto 4',
        imagen:'https://emprendepyme.net/wp-content/uploads/2018/02/cualidades-producto.jpg',
        precio:'80.00'
    },
    {
      nombre :'Producto 1',
      imagen:'https://portal.andina.pe/EDPfotografia3/Thumbnail/2021/01/01/000737963W.jpg',
      precio:'20.00'
    },
    {
        nombre :'Producto 2',
        imagen:'https://img.freepik.com/vector-gratis/conjunto-productos-aislados-alimentos-supermercado_1284-39967.jpg?w=2000',
        precio:'40.00'
    },
    {
        nombre :'Producto 3',
        imagen:'https://img.lalr.co/cms/2017/04/12033800/Productos_Vendidos_CocaCola1204.jpg?size=sm&ratio=sq&f=jpg',
        precio:'60.00'
    },
    {
        nombre :'Producto 4',
        imagen:'https://emprendepyme.net/wp-content/uploads/2018/02/cualidades-producto.jpg',
        precio:'80.00'
    }
  ]
} 