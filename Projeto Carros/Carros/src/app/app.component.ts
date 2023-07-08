import { parseTemplate } from '@angular/compiler';
import { Component } from '@angular/core';
import { form_cars } from '../app/core/models/cars.module';
import { consulta_image, image } from './core/models/api_foto.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'Carros';

  cars: form_cars[] = [
    {
      marca: 'Ford',
      modelo: 'Ecosport',
      ano: 2012,
      cor: 'prata',
      foto: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202208/20220808/FORD-ECOSPORT-1.6-SE-16V-FLEX-4P-POWERSHIFT-wmimagem15114680934.jpg',
    },
    {
      marca: 'Ford',
      modelo: 'Mustang',
      ano: 2020,
      cor: 'Azul',
      foto: 'https://revistacarro.com.br/wp-content/uploads/2019/08/Mustang-GT-500-2.jpg'
    }
 ]

 newcar(marca: string, modelo: string, ano: number, cor: string){

  consulta_image(modelo, ano, cor);

  setTimeout(() => {
    this.cars.push({
      marca: marca,
      modelo: modelo,
      ano: ano,
      cor: cor,
      foto: image
    })
  }, 10000);
 }
  constructor() {};

  ngOnInit(): void {};
}
